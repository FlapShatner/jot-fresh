'use client'
import React, { useEffect, useState } from 'react'
import { getFolder } from '@/actions/folder-actions'
import { Folder, FolderWithNotesAndFolders, Note } from '@/drizzle/schema'
import NavTree from './nav-tree'
import { cn } from '@/lib/cn'
import { Folder as FolderIcon, FolderOpen } from '@/app/icons'

function NavFolder({ folder }: { folder: Folder }) {
 if (!folder) return null
 const [isOpen, setIsOpen] = useState(false)
 const [folders, setFolders] = useState<Folder[]>([])
 const [notes, setNotes] = useState<Note[]>([])
 if (folder.isRoot) {
  return
 }
 const { id } = folder
 async function getFolderData() {
  if (!id) {
   return
  }
  const result: FolderWithNotesAndFolders | { error: string } = await getFolder(id)
  if ('error' in result) {
   alert(result.error)
   return
  }
  if (result) {
   setFolders(result.folders)
   setNotes(result.notes)
  }
  console.log(result)
 }
 useEffect(() => {
  getFolderData()
 }, [id])

 return (
  <div className='w-full'>
   <div
    key={folder.id}
    onClick={() => setIsOpen(!isOpen)}
    className={cn('flex w-full items-center px-2 gap-1 cursor-pointer')}>
    {isOpen ? (
     <FolderOpen className='text-fg-primary hover:text-blue-light cursor-pointer' />
    ) : (
     <FolderIcon className='text-fg-primary hover:text-var-blue-light cursor-pointer' />
    )}
    <div className={cn('text-fg-primary text-sm w-full truncate')}>{folder.name}</div>
   </div>
   {isOpen && (
    <NavTree
     folders={folders}
     notes={notes}
    />
   )}
  </div>
 )
}

export default NavFolder
