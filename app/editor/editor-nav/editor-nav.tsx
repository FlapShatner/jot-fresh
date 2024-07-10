import React from 'react'
import { getNotes } from '@/actions/note-actions'
import { Note } from '@/drizzle/schema'
import Link from 'next/link'
import NavItem from './nav-item'
import { New } from '@/app/icons/new'
async function EditorNav() {
 const notes: Note[] = await getNotes()
 return (
  <div className='flex flex-col w-full items-start'>
   <div className='flex w-full rounded-t-primary bg-bg-secondary justify-end items-center h-9 p-1 px-2'>
    <Link href='/editor/new'>
     <New className='text-accent text-xl hover:text-accent-light cursor-pointer' />
    </Link>
   </div>
   <div className='flex-grow w-full bg-var-editor-bg pt-2 rounded-b-primary'>
    <div className='flex flex-col flex-grow items-start'>
     {notes.map((note) => {
      return (
       <NavItem
        key={note.id}
        note={note}
       />
      )
     })}
    </div>
   </div>
  </div>
 )
}

export default EditorNav
