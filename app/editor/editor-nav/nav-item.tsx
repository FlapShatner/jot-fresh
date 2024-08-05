'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import { cn } from '@/lib/cn'
import Link from 'next/link'
import { Note as NoteIcon } from '@/app/icons'
import { Note } from '@/drizzle/schema'

function NavItem({ note }: { note: Note }) {
 const { nid } = useParams()
 const isActive = nid === note.id
 return (
  <div
   key={note.id}
   className={cn('flex w-full items-center  px-2', isActive ? 'bg-var-editor-active' : '')}>
   <Link
    prefetch={true}
    className='w-full'
    href={`/editor/${note.id}`}>
    <div className={cn('flex items-center gap-1 text-fg-primary text-sm w-full truncate', isActive ? 'text-var-yellow' : '')}>
     <NoteIcon className='' />
     {note.title}
    </div>
   </Link>
  </div>
 )
}

export default NavItem
