import { Folder, FolderWithNotesAndFolders as FolderPlus, Note } from '@/drizzle/schema'
import React from 'react'
import NavFolder from './nav-folder'
import NavItem from './nav-item'

function NavTree({ folders, notes, folderId }: { folders: FolderPlus[]; notes: Note[]; folderId: string | null }) {
 const rootFolder = folders.find((folder) => folder.isRoot)
 const rootId = rootFolder ? rootFolder.id : ''
 const isRoot = !folderId || folderId === rootId
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
    if (isRoot && !!note.folderId && note.folderId !== rootId) return null
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
