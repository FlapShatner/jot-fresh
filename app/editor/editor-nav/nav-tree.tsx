import { Folder, Note } from '@/drizzle/schema'
import React from 'react'
import NavFolder from './nav-folder'
import NavItem from './nav-item'

function NavTree({ folders, notes }: { folders: Folder[]; notes: Note[] }) {
 return (
  <div className='flex flex-col flex-grow items-start'>
   {folders.map((folder) => {
    return (
     <NavFolder
      key={folder.id}
      folder={folder}
     />
    )
   })}
   {notes.map((note) => {
    return (
     <NavItem
      key={note.id}
      note={note}
     />
    )
   })}
  </div>
 )
}

export default NavTree
