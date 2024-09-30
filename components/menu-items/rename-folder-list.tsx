import React, { useEffect, useState } from 'react'
import { getFolders, updateFolder } from '@/actions/folder-actions'
import { Folder, FolderWithNotesAndFolders } from '@/drizzle/schema'
import { Folder as FolderIcon } from '@/app/icons'

function RenameFolderList({ folder }: { folder?: FolderWithNotesAndFolders }) {
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
 const handleClick = async (item: Folder) => {
  if (!folder) return
  const result = await updateFolder({
   id: folder.id,
   name: folder.name,
   parentId: item.id ? item.id : '',
   userId: folder.userId,
  })
  if ('error' in result) {
   alert(result.error)
   return
  }
 }

 if (!folders.length) return null
 return (
  <div className='flex flex-col text-sm'>
   {folders.map((item) => {
    if (item.id === folder?.id) return null
    return (
     <div
      onClick={() => handleClick(item)}
      className='flex items-center gap-1 px-2 cursor-pointer hover:bg-var-editor-active rounded-primary'
      key={item.id}>
      <FolderIcon className='text-fg-primary min-w-6' />
      {item.name}
     </div>
    )
   })}
  </div>
 )
}

export default RenameFolderList
