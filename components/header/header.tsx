import React from 'react'
import { Logout, Login } from '@/app/icons'
import { getColors } from '@/actions/colors'
import TooltipWrap from './tooltip'
import UserAvatar from './avatar'
import Link from 'next/link'
import type { User } from 'lucia'
import ProfileMenu from '../profile-menu/profile-menu'

async function Header({ user }: { user: User | null }) {
 console.log(user)
 const colorsArray = await getColors(user?.username ?? '')
 return (
  <div className='flex items-center justify-end p-4 absolute right-0 top-0'>
   {user ? (
    <UserAvatar
     colorsArray={colorsArray}
     user={user}
    />
   ) : (
    <Link href={'/login'}>
     <TooltipWrap tooltip={{ id: 'login', content: 'Log in' }}>
      <Login className='text-accent text-3xl hover:text-accent-light cursor-pointer' />
     </TooltipWrap>
    </Link>
   )}
  </div>
 )
}

export default Header
