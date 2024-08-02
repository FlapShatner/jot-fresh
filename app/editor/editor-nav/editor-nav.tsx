import React from 'react'
import { getNotes } from '@/actions/note-actions'
import { FolderWithNotesAndFolders, Note } from '@/drizzle/schema'
import EditorNavHeader from './editor-nav-header'
import NavTree from './nav-tree'
import { getFolders } from '@/actions/folder-actions'
async function EditorNav() {
 const notes: Note[] = await getNotes()
 const folders: FolderWithNotesAndFolders[] = await getFolders()
 return (
  <div className='flex flex-col w-full items-start'>
   <EditorNavHeader />
   <div className='flex-grow w-full bg-var-editor-bg pt-2 rounded-b-primary'>
    <NavTree
     notes={notes}
     folderId={null}
     folders={folders}
    />
   </div>
  </div>
 )
}

export default EditorNav
