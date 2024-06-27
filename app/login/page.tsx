import Link from 'next/link'
import React from 'react'
import Input from '@/components/input'
import PwInput from '@/components/pw-input'

import { Home, Avatar, Lock } from '../icons'
import Button from '@/components/button'

function Login() {
 return (
  <div className='flex min-h-screen flex-col items-center justify-between p-4 '>
   <Link
    href='/'
    className='w-full flex justify-end'>
    <Home className='text-var-cyan text-5xl' />
   </Link>
   <div className='flex flex-col items-center justify-center w-full h-[calc(100vh-80px)]'>
    <form
     //  action={}
     autoComplete='off'
     className='flex flex-col items-center gap-4 justify-center font-sono transition-all'>
     <Input
      icon={<Avatar className='text-fg-primary text-2xl absolute left-2 group-hover:-translate-y-9 transition-transform' />}
      inputAttributes={{ type: 'text', name: 'username', placeholder: ' ' }}
      label='Email or username'
      labelAttributes={{ htmlFor: 'username' }}
     />
     <PwInput
      icon={<Lock className='text-fg-primary text-2xl absolute left-2 group-hover:-translate-y-9 transition-transform' />}
      inputAttributes={{ name: 'password', placeholder: '' }}
      label='Password'
      labelAttributes={{ htmlFor: 'password' }}
     />
     <Button variant='primary'>Sign In</Button>
    </form>
    <Link
     className='underline text-var-cyan mt-12 text-sm'
     href='/signup'>
     Create an account
    </Link>
   </div>
  </div>
 )
}

export default Login
