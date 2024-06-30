import React from 'react'
import { Logout, Login } from '@/app/icons'
import TooltipWrap from './tooltip'
import { logout } from '@/actions/auth-actions'
import Link from 'next/link'
import type { User } from 'lucia'

function Header({ user }: { user: User | null }) {
 return (
  <div className='flex items-center justify-end p-4 absolute right-0 top-0'>
   {user ? (
    <form action={logout}>
     <TooltipWrap tooltip={{ id: 'logout', content: 'Log out' }}>
      <button>
       <Logout className='text-accent text-3xl hover:text-accent-light cursor-pointer' />
      </button>
     </TooltipWrap>
    </form>
   ) : (
    <TooltipWrap tooltip={{ id: 'login', content: 'Log in' }}>
     <Link href={'/login'}>
      <Login className='text-accent text-3xl hover:text-accent-light cursor-pointer' />
     </Link>
    </TooltipWrap>
   )}
  </div>
 )
}

export default Header
