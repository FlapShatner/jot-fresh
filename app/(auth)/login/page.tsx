import Link from 'next/link'
import React from 'react'
import { login } from '@/actions/auth-actions'
import Input from '@/components/input'
import PwInput from '@/components/pw-input'

import { Home, Avatar, Lock } from '../../icons'
import Button from '@/components/button'
import { LoginInput } from '@/lib/types'

function Login() {
 async function loginUser(formData: FormData) {
  'use server'
  const username = formData.get('username')?.toString()
  const password = formData.get('password')?.toString()
  if (!username || !password) {
   alert('Please enter a username and password')
  }
  const loginData = { username: username, password: password } as LoginInput
  const result = await login(loginData)
  console.log(result)
 }

 return (
  <div className='flex min-h-screen flex-col items-center justify-between p-4 '>
   <Link
    href='/'
    className='w-full flex justify-end'>
    <Home className='text-accent text-3xl hover:text-accent-light' />
   </Link>
   <div className='flex flex-col items-center justify-center w-full h-[calc(100vh-80px)]'>
    <form
     action={loginUser}
     autoComplete='off'
     className='flex flex-col items-center gap-4 justify-center font-sono transition-all'>
     <Input
      icon={<Avatar className='text-fg-primary text-2xl absolute left-2 group-hover:-translate-y-9 transition-transform' />}
      inputAttributes={{ type: 'text', name: 'username', placeholder: ' ', required: true }}
      label='Email or username'
      labelAttributes={{ htmlFor: 'username' }}
     />
     <PwInput
      icon={<Lock className='text-fg-primary text-2xl absolute left-2 group-hover:-translate-y-9 transition-transform' />}
      inputAttributes={{ name: 'password', placeholder: '', required: true }}
      label='Password'
      labelAttributes={{ htmlFor: 'password' }}
     />
     <Button variant='primary'>Sign In</Button>
    </form>
    <Link
     className='underline text-accent mt-12 text-sm hover:text-accent-light'
     href='/signup'>
     Create an account
    </Link>
   </div>
  </div>
 )
}

export default Login
