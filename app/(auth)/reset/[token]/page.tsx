'use client'
import React, { useState } from 'react'
import { Button, PwInput } from '@/components'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { resetPasswordWithToken } from '@/actions/auth-actions'
import { Lock } from '@/app/icons'

async function ResetPassword({ params }: { params: Promise<{ token: string }> }) {
 const token = (await params).token

 const handleSubmit = async (formData: FormData) => {
  const password = formData.get('password')?.toString()
  const confirmPassword = formData.get('confirmPassword')?.toString()
  if (password && confirmPassword && password !== confirmPassword) {
   return alert('Passwords do not match')
  }
  if (!password || !confirmPassword) {
   return alert('Please enter a password')
  }
  const result = await resetPasswordWithToken(token, password)
  if ('error' in result) {
   return alert('There was an error. Please try again')
  }
  redirect('/login')
 }

 return (
  <div className='flex min-h-screen flex-col items-center justify-between p-4 '>
   <div className='flex flex-col items-center justify-center w-full h-[calc(100vh-200px)]'>
    <div className='py-12 text-xl text-fg-primary'>Create a new password</div>
    <form
     action={handleSubmit}
     autoComplete='off'
     className='flex flex-col items-center gap-2 justify-center font-sono transition-all'>
     <div className='flex flex-col group gap-2'>
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
     </div>
     <Button variant='primary'>Reset password</Button>
     <Link
      className='w-full bg-bg-primary rounded-md py-2 mt-4 text-accent-light font-bold border border-accent hover:bg-var-editor-active hover:border-accent-light transition-all text-center'
      href='/login'>
      Cancel
     </Link>
    </form>
   </div>
  </div>
 )
}

export default ResetPassword
