import React from 'react'
import Link from 'next/link'
import { validateRequest } from '@/actions/auth-actions'

async function Profile() {
    const { user, session } = await validateRequest()
 
 return (
  <div className='flex flex-col items-center h-screen gap-4'>
   <Link className='text-fg-primary border-2 border-fg-primary rounded-md px-4 py-1' href='/'>Back</Link>
   {user ? <div>{user.username}</div> : <div>Guest</div>}
  </div>
 )
}

export default Profile
