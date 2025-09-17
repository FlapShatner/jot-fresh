import React from 'react'
import { FolderWithNotesAndFolders } from '@/drizzle/schema'
import { getFolder, getRootFolder } from '@/actions/folder-actions'
import { cn } from '@/lib/cn'
import NavTree from './nav-tree'
import FolderLabel from './folder-label'
import type { Note } from '@/drizzle/schema'

async function NavFolder({ folder, params, isChild }: { folder: FolderWithNotesAndFolders; params: { nid?: string | null }; isChild: boolean }) {
 const folderData = await getFolder(folder.id)
 const { folders, notes }: { folders: FolderWithNotesAndFolders[]; notes: Note[] } = folderData
 const childIds = notes?.map((note) => note.id) ?? []

 return (
  <div className={cn('w-full', isChild && 'border-l border-var-cyan-trans ml-3')}>
   <FolderLabel
    childIds={childIds}
    folder={folder}>
    <div className='flex'>
     <NavTree
      params={params}
      folderId={folder.id}
      folders={folders ?? []}
      notes={notes ?? []}
     />
    </div>
   </FolderLabel>
  </div>
 )
}

export default NavFolder
