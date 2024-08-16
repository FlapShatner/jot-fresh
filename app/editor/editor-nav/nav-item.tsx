'use client'
import React from 'react'
import Tooltip from '@/components/floating/tooltip'
import { useParams } from 'next/navigation'
import { cn } from '@/lib/cn'
import Link from 'next/link'
import { Note as NoteIcon } from '@/app/icons'
import { Note } from '@/drizzle/schema'

function NavItem({ note, isRootChild }: { note: Note; isRootChild: boolean }) {
 const { nid } = useParams()
 const isActive = nid === note.id
 return (
  <div
   key={note.id}
   className={cn('flex items-center relative ', isActive ? 'bg-var-editor-active' : '')}>
   <Link
    className={cn('border-l border-var-cyan-trans ml-3', isRootChild && 'border-0 ml-0')}
    prefetch={true}
    href={`/editor/${note.id}`}>
    <p className={cn('flex items-center  gap-1 text-fg-primary text-sm ', isActive && 'text-var-yellow')}>
     <NoteIcon className='min-w-6 text-var-cyan-light' />
     <Tooltip label={note.title}>
      <span className='text-nowrap truncate'>{note.title}</span>
     </Tooltip>
    </p>
   </Link>
  </div>
 )
}

export default NavItem
