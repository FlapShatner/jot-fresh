import { userData } from '@/dl/queries'
import { isEmail, isAscii, isByteLength } from 'validator'
import { hash } from '@node-rs/argon2'
import { cookies } from 'next/headers'
import { lucia } from '@/lib'
import { redirect } from 'next/navigation'
import { generateIdFromEntropySize } from 'lucia'
import { NewUserInput } from '@/lib/types'

const usernameLength = { min: 3, max: 30 }

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
 console.log(result)
 const session = await lucia.createSession(userId, {})
 const sessionCookie = lucia.createSessionCookie(session.id)
 cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
 return redirect('/')
}
