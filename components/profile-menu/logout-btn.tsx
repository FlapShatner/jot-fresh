'use client'
import React from 'react'
import { Logout } from '@/app/icons'

function LogoutBtn({ logout }: { logout: () => void }) {
 return (
  <div
   className='cursor-pointer flex gap-1 items-center hover:text-accent-light'
   onClick={() => logout()}>
   <Logout className=' hover:text-accent-light' />
   Sign out
  </div>
 )
}

export default LogoutBtn
