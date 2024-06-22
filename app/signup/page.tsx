import React from 'react'
import { signup } from '@/actions/auth-actions'
import { passwordsMatch } from '@/lib'
import { NewUserInput } from '@/lib/types'
import Link from 'next/link'
import { IcRoundHome } from '../icons/home'

function Signup() {
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
  console.log(result)
 }

 return (
  <div className='flex min-h-screen flex-col items-center justify-between p-4'>
   <Link
    href='/'
    className='w-full flex justify-end'>
    <IcRoundHome className='text-var-cyan text-5xl' />
   </Link>
   <div className='flex flex-col items-center justify-center w-full h-[calc(100vh-80px)]'>
    <form
     action={addUser}
     autoComplete='off'
     className='flex flex-col items-center gap-4 justify-center font-sono transition-all'>
     <div className='flex flex-col'>
      <label htmlFor='username'>Username</label>
      <input
       className='text-fg-primary bg-bg-primary border-2 border-var-cyan py-1 px-2 text-lg rounded-md hover:bg-bg-secondary transition-all'
       type='text'
       name='username'
      />
     </div>
     <div className='flex flex-col'>
      <label htmlFor='email'>Email</label>
      <input
       className='text-fg-primary bg-bg-primary border-2 border-var-cyan py-1 px-2 text-lg rounded-md hover:bg-bg-secondary transition-all'
       required
       type='text'
       name='email'
      />
     </div>

     <div className='flex flex-col'>
      <label htmlFor='password'>Password</label>
      <input
       className='text-fg-primary bg-bg-primary border-2 border-var-cyan py-1 px-2 text-lg rounded-md hover:bg-bg-secondary transition-all'
       required
       type='password'
       name='password'
      />
     </div>
     <div className='flex flex-col'>
      <label htmlFor='confirmPassword'>Confirm Password</label>
      <input
       className='text-fg-primary bg-bg-primary border-2 border-var-cyan py-1 px-2 text-lg rounded-md hover:bg-bg-secondary transition-all'
       required
       type='password'
       name='confirmPassword'
      />
     </div>
     <button className='w-full bg-var-cyan rounded-md py-2 mt-4 text-bg-primary font-bold border-2 border-var-cyan hover:bg-var-cyan-light hover:border-var-cyan-light transition-all'>
      Sign Up
     </button>
    </form>
    <Link
     className='underline text-var-cyan mt-12 text-sm'
     href='/login'>
     Login with an existing account
    </Link>
   </div>
  </div>
 )
}

export default Signup
