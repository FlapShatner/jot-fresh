import React from 'react'
import { FolderWithNotesAndFolders } from '@/drizzle/schema'
import { getFolder } from '@/actions/folder-actions'
import NavTree from './nav-tree'
import FolderLabel from './folder-label'

async function NavFolder({ folder }: { folder: FolderWithNotesAndFolders }) {
 const folderData = await getFolder(folder.id)
 const { folders, notes } = folderData

 return (
  <div className='w-full'>
   <FolderLabel folder={folder} />
   <div className='pl-2'>
    <NavTree
     folderId={folder.id}
     folders={folders ?? []}
     notes={notes ?? []}
    />
   </div>
  </div>
 )
}

export default NavFolder
