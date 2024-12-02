'use client'
import React from 'react'
import { Trash } from '@/app/icons'
import { FolderWithNotesAndFolders } from '@/drizzle/schema'
import { cn } from '@/lib/cn'
import { deleteFolder } from '@/actions/folder-actions'
import DeleteConfirm from '../floating/delete-confirm'

function FolderDelete({ folder }: { folder: FolderWithNotesAndFolders }) {
 const handleClick = () => {
  const result = deleteFolder(folder)
 }
 return (
  <>
   <DeleteConfirm
    handleClick={handleClick}
    target={
     <div className={cn('py-1 w-full pr-2 text-sm flex items-center bg-bg-secondary rounded-primary cursor-pointer hover:bg-var-editor-active')}>
      <div className='w-[30px] '>
       <Trash className='m-auto text-fg-secondary text-sm cursor-pointer hover:text-fg-primary' />
      </div>
      Delete folder
     </div>
    }
   />
  </>
 )
}

export default FolderDelete
