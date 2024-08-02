'use client'
import React, { useState } from 'react'
import { FolderWithNotesAndFolders } from '@/drizzle/schema'
import NavTree from './nav-tree'
import { cn } from '@/lib/cn'
import { Folder as FolderIcon, FolderOpen } from '@/app/icons'

function NavFolder({ folder }: { folder: FolderWithNotesAndFolders }) {
 const [isOpen, setIsOpen] = useState(false)

 const { folders, notes } = folder

 if (!folder) return null
 if (folder.isRoot) {
  return null
 }
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
     folderId={folder.id}
     folders={folders ?? []}
     notes={notes ?? []}
    />
   )}
  </div>
 )
}

export default NavFolder
