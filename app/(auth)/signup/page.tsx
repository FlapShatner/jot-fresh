import React from 'react'
import { signup, validateRequest } from '@/actions/auth-actions'
import { passwordsMatch } from '@/lib/utils'
import { NewUserInput } from '@/lib/types'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import SignupForm from './signup-form'

async function Signup() {
 const { user, session } = await validateRequest()
 if (user) {
  return redirect('/editor/new')
 }

 async function addUser(formData: FormData) {
  'use server'
  const username = formData.get('username')?.toString()
  const email = formData.get('email')?.toString()
  const password = formData.get('password')?.toString()
  const confirmPassword = formData.get('confirmPassword')?.toString()
  if (password && confirmPassword && !passwordsMatch(password, confirmPassword)) {
   alert('Passwords do not match')
   return
  }
  const newUser = {
   username,
   email,
   password,
  } as NewUserInput
  const result = await signup(newUser)
  if (result.error) {
   return result.error
  }
  return    
 }

 return (
  <div className='flex min-h-screen flex-col items-center justify-between p-4 '>
   <div className='flex flex-col items-center justify-center w-full h-[calc(100vh-80px)]'>
    <SignupForm addUser={addUser} />
    <Link
     className='underline text-accent mt-12 text-sm hover:text-accent-light'
     href='/login'>
     Login with an existing account
    </Link>
   </div>
  </div>
 )
}

export default Signup
