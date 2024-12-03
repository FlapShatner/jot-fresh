'use client'
import { useState } from 'react'
import { Button } from '@/components'
import { resetPassword } from '@/actions/auth-actions'
import { sendEmail } from '@/lib/nodemailer'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default function Reset() {
 const [success, setSuccess] = useState(false)
 const [email, setEmail] = useState('')
 async function handleSubmit(formData: FormData) {
  const email = formData.get('email')?.toString()
  if (!email) {
   return alert('Please enter an email')
  }
  const tok = await resetPassword(email)
  if (!tok || (typeof tok === 'object' && 'error' in tok)) {
   return alert('There was an error. Please try again')
  }
  const emailText = `Reset your password by clicking on this link: https://jot-fresh.vercel.app/reset/${tok}`
  const response = await sendEmail(email, 'Password reset', emailText)
  if (response) {
   setEmail(response.accepted[0] as string)
   setSuccess(true)
  }
 }

 return (
  <div className='flex min-h-screen flex-col items-center justify-between p-4 '>
   <div className='flex flex-col items-center justify-center w-full h-[calc(100vh-80px)]'>
    {success ? (
     <div className='flex flex-col text-center gap-4'>
      <div>
       <p className='text-lg'>
        An email has been sent to
        <p>{email}</p>
        <p>with a link to reset your password.</p>
       </p>
      </div>
      <div className='text-sm'>
       <p>You may need to check your spam or junk folder</p>
       <p> Your reset link will expire in 1 hour</p>
      </div>
     </div>
    ) : (
     <form
      action={handleSubmit}
      autoComplete='off'
      className='flex flex-col items-center gap-2 justify-center font-sono transition-all'>
      <div className='flex flex-col group gap-2'>
       <label className='transition-transform text-fg-primary'>Email address for your profile</label>
       <input
        name='email'
        autoComplete='false'
        className='w-full text-fg-primary bg-bg-primary border border-var-cyan-trans py-1 px-2 text-lg rounded-md hover:bg-bg-secondary '
       />
      </div>
      <Button variant='primary'>Send reset link</Button>
      <Link
       className='w-full bg-bg-primary rounded-md py-2 mt-4 text-accent-light font-bold border border-accent hover:bg-var-editor-active hover:border-accent-light transition-all text-center'
       href='/login'>
       Cancel
      </Link>
     </form>
    )}
   </div>
  </div>
 )
}
