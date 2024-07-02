'use client'
import React, { useRef } from 'react'
import { cn } from '@/lib/cn'
import Link from 'next/link'
import LogoutBtn from './logout-btn'
import TooltipWrap from '../header/tooltip'
import { logout } from '@/actions/auth-actions'
import { Avatar } from '@/app/icons'
import { User } from 'lucia'
import { useOnClickOutside } from 'usehooks-ts'

function ProfileMenu({ user, showMenu, setShowMenu }: { user: User | null; showMenu: boolean; setShowMenu: React.Dispatch<React.SetStateAction<boolean>> }) {
 return (
  <div
   className={cn(
    'flex flex-col absolute w-32 right-2 -bottom-[92px] px-2 py-1 bg-bg-secondary rounded-md border border-accent-light shadow-lg profile-menu',
    showMenu ? '' : 'hide-menu'
   )}>
   <TooltipWrap tooltip={{ id: 'username', content: user?.username ?? '' }}>
    <p className='pb-1 mb-2 border-b border-fg-secondary truncate w-full cursor-pointer'>{user?.username}</p>
   </TooltipWrap>
   <div className='flex flex-col gap-1'>
    <Link
     className='flex gap-1 items-center hover:text-accent-light'
     href='/profile'>
     <Avatar />
     Profile
    </Link>
    <LogoutBtn logout={logout} />
   </div>
  </div>
 )
}

export default ProfileMenu
