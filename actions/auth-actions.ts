'use server'
import { cache } from 'react'
import { userData } from '@/dl/queries'
import { isEmail, isAscii, isByteLength } from 'validator'
import { hash, verify } from '@node-rs/argon2'
import { cookies } from 'next/headers'
import { lucia } from '@/lib/lucia/auth'
import { redirect } from 'next/navigation'
import { generateIdFromEntropySize } from 'lucia'
import type { Session, User } from 'lucia'
import { NewUserInput } from '@/lib/types'
import { ActionResult } from 'next/dist/server/app-render/types'
import { createRootFolder } from './folder-actions'

const usernameLength = { min: 3, max: 30 }

type ReturnedUser = { id: string; username: string | null; email: string; password_hash: string; createdAt: Date } | null

export async function signup(newUser: NewUserInput) {
 'use server'
 const { username, email, password } = newUser
 if (!username || !email || !password) {
  return {
   error: 'Missing required fields.',
  }
 }

 if (!isAscii(username) || !isByteLength(username, usernameLength)) {
  return {
   error: 'Invalid username.',
  }
 }

 if (!isEmail(email)) {
  return {
   error: 'Invalid email.',
  }
 }

 const user = await userData.getUserByEmail(email)
 if (user) {
  return {
   error: 'User already exists.',
  }
 }

 if (!isByteLength(password, { min: 8, max: 255 })) {
  return {
   error: 'Password must be at least 8 characters long.',
  }
 }
 const password_hash = await hash(password, {
  memoryCost: 19456,
  timeCost: 2,
  outputLen: 32,
  parallelism: 1,
 })

 const userId = generateIdFromEntropySize(10)

 const result = await userData.insertUser({
  username,
  email,
  password_hash,
  id: userId,
 })
 await createRootFolder({ userId: userId })
 //  console.log(result)
 const session = await lucia.createSession(userId, {})
 const sessionCookie = lucia.createSessionCookie(session.id)
 cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
 return redirect('/')
}

export const validateRequest = cache(async (): Promise<{ user: User; session: Session } | { user: null; session: null }> => {
 const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null
 if (!sessionId) {
  return {
   user: null,
   session: null,
  }
 }

 const result = await lucia.validateSession(sessionId)
 // next.js throws when you attempt to set cookie when rendering page
 try {
  if (result.session && result.session.fresh) {
   const sessionCookie = lucia.createSessionCookie(result.session.id)
   cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
  }
  if (!result.session) {
   const sessionCookie = lucia.createBlankSessionCookie()
   cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
  }
 } catch {}
 return result
})

export async function logout(): Promise<ActionResult> {
 'use server'
 const { session } = await validateRequest()
 if (!session) {
  return {
   error: 'Unauthorized',
  }
 }

 await lucia.invalidateSession(session.id)

 const sessionCookie = lucia.createBlankSessionCookie()
 cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
 return redirect('/')
}

export async function login({ username, password }: { username: string; password: string }): Promise<ActionResult> {
 'use server'

 if (!isByteLength(password, { min: 8, max: 255 })) {
  return {
   error: 'Invalid credentials.',
  }
 }
 let user: ReturnedUser | null = null

 if (!isEmail(username)) {
  if (!isAscii(username) || !isByteLength(username, usernameLength)) {
   return {
    error: 'Invalid credentials.',
   }
  }
  user = await userData.getUserByUsername(username)
 } else {
  user = await userData.getUserByEmail(username)
 }
 if (!user) {
  return {
   error: 'Invalid credentials.',
  }
 }
 const validPassword = await verify(user.password_hash, password, {
  memoryCost: 19456,
  timeCost: 2,
  outputLen: 32,
  parallelism: 1,
 })
 if (!validPassword) {
  return {
   error: 'Incorrect username or password',
  }
 }

 const session = await lucia.createSession(user.id, {})
 const sessionCookie = lucia.createSessionCookie(session.id)
 cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
 return redirect('/')
}
