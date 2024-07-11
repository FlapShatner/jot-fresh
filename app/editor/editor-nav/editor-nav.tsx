import React from 'react'
import { getNotes } from '@/actions/note-actions'
import { Note } from '@/drizzle/schema'
import EditorNavHeader from './editor-nav-header'
import NavItem from './nav-item'
async function EditorNav() {
 const notes: Note[] = await getNotes()
 return (
  <div className='flex flex-col w-full items-start'>
   <EditorNavHeader />
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
