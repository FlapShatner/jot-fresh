import React from 'react'
import { signup } from '@/actions/auth-actions'
import { passwordsMatch } from '@/lib'
import { NewUserInput } from '@/lib/types'
import Link from 'next/link'
import { Home, Email, Lock, Avatar } from '../../icons'
import Button from '@/components/button'
import Input from '@/components/input'
import PwInput from '@/components/pw-input'

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
  //   console.log(result)
 }

 return (
  <div className='flex min-h-screen flex-col items-center justify-between p-4 '>
   {/* <Link
    href='/'
    className='w-full flex justify-end'>
    <Home className='text-accent text-3xl hover:text-accent-light' />
   </Link> */}
   <div className='flex flex-col items-center justify-center w-full h-[calc(100vh-80px)]'>
    <form
     action={addUser}
     autoComplete='off'
     className='flex flex-col items-center gap-4 justify-center font-sono transition-all'>
     <Input
      icon={<Avatar className='text-fg-primary text-2xl absolute left-2 -translate-y-9 transition-transform' />}
      inputAttributes={{ type: 'text', name: 'username', placeholder: ' ' }}
      label='Username'
      labelAttributes={{ htmlFor: 'username' }}
     />
     <Input
      icon={<Email className='text-fg-primary text-2xl absolute left-2 -translate-y-9 transition-transform' />}
      inputAttributes={{ type: 'email', name: 'email', placeholder: ' ' }}
      label='Email'
      labelAttributes={{ htmlFor: 'email' }}
     />
     <PwInput
      icon={<Lock className='text-fg-primary text-2xl absolute left-2 -translate-y-9 transition-transform' />}
      inputAttributes={{ name: 'password', placeholder: '' }}
      label='Password'
      labelAttributes={{ htmlFor: 'password' }}
     />
     <PwInput
      icon={<Lock className='text-fg-primary text-2xl absolute left-2 -translate-y-9 transition-transform' />}
      inputAttributes={{ name: 'confirmPassword', placeholder: '' }}
      label='Confirm Password'
      labelAttributes={{ htmlFor: 'confirmPassword' }}
     />
     <Button variant='primary'>Sign Up</Button>
    </form>
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
