import React from 'react'
import { getNotes } from '@/actions/note-actions'
import { Note } from '@/drizzle/schema'
async function EditorNav() {
 const notes: Note[] = await getNotes()
 return (
  <div className='flex-grow rounded-primary bg-bg-secondary p-2'>
   <div className='flex flex-col gap-2 items-start'>
    {notes.map((note) => {
     return (
      <div
       key={note.id}
       className='flex gap-2 items-center hover:text-accent-light'>
       <div className='text-fg-primary text-xl'>{note.title}</div>
      </div>
     )
    })}
   </div>
  </div>
 )
}

export default EditorNav
