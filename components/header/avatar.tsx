'use client'
import React, { useRef, useState } from 'react'
import Avatar from 'boring-avatars'
import { User } from 'lucia'
import ProfileMenu from '../profile-menu/profile-menu'
import { useOnClickOutside } from 'usehooks-ts'

type Props = {
 user: User | null
 colorsArray: string[]
}

function UserAvatar({ user, colorsArray }: Props) {
 const [showMenu, setShowMenu] = useState(false)
 const ref = useRef<HTMLDivElement>(null)
 useOnClickOutside(ref, () => setShowMenu(false))
 const { username } = user ?? {}

 return (
  <div ref={ref}>
   <div
    onClick={() => setShowMenu(!showMenu)}
    className='hover:cursor-pointer rounded-full glow w-max'>
    <Avatar
     size={32}
     colors={colorsArray}
     name={username ?? 'anonymous'}
     variant='pixel'
    />
   </div>
   <ProfileMenu
    showMenu={showMenu}
    setShowMenu={setShowMenu}
    user={user}
   />
  </div>
 )
}

export default UserAvatar
