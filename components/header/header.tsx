import React from 'react'
import { Login } from '@/app/icons'
import { getColors } from '@/actions/colors'
import UserAvatar from './avatar'
import Link from 'next/link'
import type { User } from 'lucia'

async function Header({ user }: { user: User | null }) {
 //  console.log(user)
 const colorsArray = await getColors(user?.username ?? '')
 return (
  <div className='w-full h-16'>
   <div className='flex items-center justify-between p-4 absolute right-0 top-0'>
    
    {user ? (
     <UserAvatar
      colorsArray={colorsArray}
      user={user}
     />
    ) : (
     <div />  
    )}
   </div>
  </div>
 )
}

export default Header
