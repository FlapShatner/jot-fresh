import React from 'react'
import ContextTree from './context-tree'
import { FolderWithNotesAndFolders, Note } from '@/drizzle/schema'
import EditorNavHeader from './editor-nav-header'
import NavTree from './nav-tree'
import NavTreeShow from './nav-tree-show'
import { getRootFolder } from '@/actions/folder-actions'
import { getNotes } from '@/actions/note-actions'
import Search from './search/search'

async function EditorNav({ params }: { params: { nid: string } }) {
 const rootFolder: FolderWithNotesAndFolders = await getRootFolder()
 const folders = rootFolder.folders ?? []
 const notes = rootFolder.notes ?? []
 const allNotes = await getNotes()

 return (
  <ContextTree>
   <div className='flex flex-col items-start w-full max-w-[var(--nav-width)]'>
    <EditorNavHeader />
    <Search allNotes={allNotes} />
    <div className='relative flex-grow w-full bg-var-editor-bg pt-2 rounded-b-primary pr-1 '>
     <div className='h-full flex absolute top-0 left-0 right-0'>
      <NavTreeShow>
       <NavTree
        params={params}
        notes={notes}
        folderId={rootFolder.id}
        folders={folders}
       />
      </NavTreeShow>
     </div>
    </div>
   </div>
  </ContextTree>
 )
}

export default EditorNav
