import { Folder, FolderWithNotesAndFolders as FolderPlus, FolderWithNotesAndFolders, Note } from '@/drizzle/schema'
import React from 'react'
import FolderSettings from './folder-settings'
import { cn } from '@/lib/cn'
import NavFolder from './nav-folder'
import NavItem from './nav-item'
import { getRootFolder } from '@/actions/folder-actions'

async function NavTree({ folders, notes, folderId, params }: { folders: FolderPlus[]; notes: Note[]; folderId: string; params: { nid?: string | null } }) {
 const rootFolder: FolderWithNotesAndFolders = await getRootFolder()
 const isRootChild = rootFolder.id === folderId

 return (
  <div
  
   className={cn('flex flex-col flex-grow items-start overflow-x-hidden', isRootChild && 'pb-8')}>
   {folders.map((folder) => {
    const isChild = folder.parentId !== rootFolder.id
    return (
     <div
      key={folder.id}
      className='w-full flex items-start justify-center'>
      <NavFolder
       isChild={isChild}
       params={params}
       folder={folder}
      />
     </div>
    )
   })}
   {notes.map((note) => {
    return (
     <NavItem
      isRootChild={isRootChild}
      key={note.id}
      note={note}
     />
    )
   })}
  </div>
 )
}
export default NavTree
