import { Email } from '@/app/icons'
import { Button, Input } from '@/components'
import Link from 'next/link'

export default function Reset() {
 async function handleSubmit() {
  'use server'
  console.log('submit')
 }

 return (
  <div className='flex min-h-screen flex-col items-center justify-between p-4 '>
   <div className='flex flex-col items-center justify-center w-full h-[calc(100vh-80px)]'>
    <form
     action={handleSubmit}
     autoComplete='off'
     className='flex flex-col items-center gap-2 justify-center font-sono transition-all'>
     <div className='flex flex-col group gap-2'>
      <label className='transition-transform text-fg-primary'>Email address you used to signup</label>
      <input
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
   </div>
  </div>
 )
}
