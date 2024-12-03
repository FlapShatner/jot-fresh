import React from 'react'
import Link from 'next/link'

function CheckEmail() {
 return (
  <div className='flex min-h-screen flex-col items-center p-4 gap-4'>
   <div className='text-center'>
    <p className='text-lg'>An email has been sent to your email address.</p>
    <p className='text-lg'>Click the link inside to reset your password.</p>
   </div>
   <div className='text-xs text-center'>
    <p>If you do not see an email, check your spam or junk folder.</p>
    <p>If you haven't received one in the next few minutes, start the process again.</p>
   </div>
  </div>
 )
}

export default CheckEmail
