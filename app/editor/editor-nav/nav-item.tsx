'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import { cn } from '@/lib/cn'
import Link from 'next/link'
import { Note } from '@/drizzle/schema'

function NavItem({ note }: { note: Note }) {
 const { nid } = useParams()
 const isActive = nid === note.id
 return (
  <div
   key={note.id}
   className={cn('flex w-full items-center pl-[28px] pr-2', isActive ? 'bg-var-editor-active' : '')}>
   <Link
    prefetch={true}
    className='w-full'
    href={`/editor/${note.id}`}>
    <div className={cn('text-fg-primary text-sm w-full truncate', isActive ? 'text-var-yellow' : '')}>{note.title}</div>
   </Link>
  </div>
 )
}

export default NavItem
