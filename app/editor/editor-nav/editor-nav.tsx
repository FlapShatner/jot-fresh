import React from 'react'
import { FolderWithNotesAndFolders, Note } from '@/drizzle/schema'
import EditorNavHeader from './editor-nav-header'
import NavTree from './nav-tree'
import { getRootFolder } from '@/actions/folder-actions'
async function EditorNav() {
 const rootFolder: FolderWithNotesAndFolders = await getRootFolder()
 const folders = rootFolder.folders ?? []
 const notes = rootFolder.notes ?? []
 //  console.log(rootFolder)
 return (
  <div className='flex flex-col w-full items-start'>
   <EditorNavHeader />
   <div className='flex-grow w-full bg-var-editor-bg pt-2 rounded-b-primary'>
    <NavTree
     notes={notes}
     folderId={rootFolder.id}
     folders={folders}
    />
   </div>
  </div>
 )
}

export default EditorNav
