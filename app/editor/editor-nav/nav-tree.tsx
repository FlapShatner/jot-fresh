import { Folder, FolderWithNotesAndFolders as FolderPlus, Note } from '@/drizzle/schema'
import React from 'react'
import NavFolder from './nav-folder'
import NavItem from './nav-item'

async function NavTree({ folders, notes, folderId }: { folders: FolderPlus[]; notes: Note[]; folderId: string }) {
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
