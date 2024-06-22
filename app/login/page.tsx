import Link from 'next/link'
import React from 'react'
import { Home, Avatar, Lock } from '../icons'

function Login() {
 return (
  <div className='flex min-h-screen flex-col items-center justify-between p-4'>
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
     <div className='flex flex-col group input-wrap '>
      <label
       className='group-hover:translate-x-9 transition-transform'
       htmlFor='username'>
       Email or username
      </label>

      <div className='flex items-center relative '>
       <input
        className='text-fg-primary bg-bg-primary border-2 border-var-cyan py-1 px-2 text-lg rounded-md hover:bg-bg-secondary transition-all ph-show caret-transparent'
        type='text'
        name='username'
        placeholder=' '
       />

       <Avatar className='text-fg-secondary text-2xl absolute left-2 group-hover:-translate-y-9 transition-transform' />
      </div>
     </div>

     <div className='flex flex-col group input-wrap '>
      <label
       className='group-hover:translate-x-9 transition-transform'
       htmlFor='password'>
       Password
      </label>

      <div className='flex items-center relative group'>
       <input
        className='text-fg-primary bg-bg-primary border-2 border-var-cyan py-1 px-2 text-lg rounded-md hover:bg-bg-secondary transition-all ph-show caret-transparent'
        required
        type='password'
        name='password'
        placeholder=''
       />

       <Lock className='text-fg-secondary text-2xl absolute left-2 group-hover:-translate-y-9 transition-transform' />
      </div>
     </div>

     <button className='w-full bg-var-cyan rounded-md py-2 mt-4 text-bg-primary font-bold border-2 border-var-cyan hover:bg-var-cyan-light hover:border-var-cyan-light transition-all'>
      Sign In
     </button>
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
