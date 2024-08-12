'use client'
import React, { useState, useRef } from 'react'
import { cn } from '@/lib/cn'
import SettingsMenu from '@/components/floating/settings-menu'
import { Folder as FolderIcon, FolderOpen, Settings as SettingsIcon } from '@/app/icons'
import RenameFolder from '@/components/menu-items/rename-folder'
import FolderSelect from '@/components/menu-items/folder-select'
import { FolderWithNotesAndFolders, Note } from '@/drizzle/schema'
import { useParams } from 'next/navigation'

function FolderLabel({ folder }: { folder: FolderWithNotesAndFolders }) {
 const [isOpen, setIsOpen] = useState(false)
 const ref = useRef<HTMLDivElement>(null)
 const { nid } = useParams()
 const notes = folder.notes ?? []
 const childIsOpen = notes && notes.some((note) => note.id === nid)
 const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  if (ref.current && !ref.current.contains(e.target as Node)) {
   setIsOpen(!isOpen)
  }
 }
 return (
  <div
   key={folder.id}
   onClick={(e) => handleClick(e)}
   className={cn('flex w-full items-center pl-2 pr-1 gap-1 cursor-pointer hover:bg-var-editor-active')}>
   {isOpen || childIsOpen ? (
    <FolderOpen className={cn('text-fg-primary hover:text-blue-light cursor-pointer', childIsOpen ? 'text-var-yellow' : '')} />
   ) : (
    <FolderIcon className='text-fg-primary hover:text-var-blue-light cursor-pointer' />
   )}
   <div className={cn('group flex items-center justify-between text-fg-primary text-sm w-full truncate', childIsOpen ? 'text-var-yellow' : '')}>
    {folder.name}
    <div ref={ref}>
     <SettingsMenu
      target={
       <div className={cn('w-6 h-5 rounded-primary flex items-center justify-center', isOpen || childIsOpen ? 'hover:bg-var-cyan-trans ' : '')}>
        <SettingsIcon className={cn('text-xs hidden text-fg-primary', isOpen || childIsOpen ? 'block' : 'hidden')} />
       </div>
      }
      title='Folder Settings'>
      <RenameFolder folder={folder} />
      <FolderSelect folder={folder} />
     </SettingsMenu>
    </div>
   </div>
  </div>
 )
}

export default FolderLabel
