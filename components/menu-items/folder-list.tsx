import React, { useEffect, useState } from 'react'
import { getFolders } from '@/actions/folder-actions'
import { updateNote, getNote } from '@/actions/note-actions'
import { Folder, FolderWithNotesAndFolders, Note } from '@/drizzle/schema'
import { Folder as FolderIcon } from '@/app/icons'

function FolderList({ nid }: { nid: string | string[] | undefined }) {
 const [folders, setFolders] = useState<Folder[]>([])

 useEffect(() => {
  async function getFolderData() {
   if (!folders.length) {
    const result: any[] = await getFolders()
    setFolders(result)
   }
  }
  getFolderData()
 }, [])
 const handleClick = async (folder: Folder) => {
  if (!nid) return
  const noteId = typeof nid === 'string' ? nid : nid[0]
  const note: Note | { error: string } = await getNote(noteId)
  if ('error' in note) return
  if (note) {
   const result: Note | { error: string } = await updateNote({
    userId: note.userId,
    folderId: folder.id,
    syntax: note.syntax ?? '',
    id: noteId,
    title: note.title,
    content: note.content,
    updatedAt: note.updatedAt,
   })
  }
 }

 if (!folders.length) return null
 return (
  <div className='flex flex-col text-sm'>
   {folders.map((item) => {
    return (
     <div
      onClick={() => handleClick(item)}
      className='flex items-start  gap-1 px-2 cursor-pointer hover:bg-var-editor-active rounded-primary'
      key={item.id}>
      <div className='pt-0.5 min-w-4'>
       <FolderIcon className='text-fg-primary' />
      </div>
      <div className='w-full text-start'>{item.name}</div>
     </div>
    )
   })}
  </div>
 )
}

export default FolderList
