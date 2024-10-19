'use client'
import React, { useState, useRef, useEffect } from 'react'
import { useFolderContext } from '@/app/context/folder-context'
import { cn } from '@/lib/cn'
import FolderSettings from './folder-settings'
import { Folder as FolderIcon, FolderOpen } from '@/app/icons'

import { FolderWithNotesAndFolders, Note } from '@/drizzle/schema'
import { useParams } from 'next/navigation'
import Tooltip from '@/components/floating/tooltip'

type FolderLabelProps = {
 folder: FolderWithNotesAndFolders
 children: React.ReactNode
 childIds: string[]
}

function FolderLabel({ folder, children, childIds }: FolderLabelProps) {
 const [isOpen, setIsOpen] = useState(false)
 const ref = useRef<HTMLDivElement>(null)

 const folderContext = useFolderContext()
 const areFoldersOpen = folderContext ? folderContext.areFoldersOpen : 'none'
 const { nid } = useParams()

 useEffect(() => {
  if (areFoldersOpen === 'true') {
   setIsOpen(true)
  } else if (areFoldersOpen === 'false') {
   setIsOpen(false)
  } else return
 }, [areFoldersOpen])

 const childIsOpen = childIds && childIds.includes(nid as string)

 const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  folderContext?.setNone()
  setIsOpen(!isOpen)
 }

 return (
  <div>
   <div className='flex items-center justify-between'>
    <div
     key={folder.id}
     onClick={(e) => handleClick(e)}
     className={cn('flex w-full items-center gap-1 cursor-pointer hover:bg-var-editor-active')}>
     {isOpen ? <FolderOpen className={cn('text-var-green  cursor-pointer min-w-6')} /> : <FolderIcon className={cn('text-var-green cursor-pointer min-w-6')} />}
     <Tooltip label={folder.name}>
      <div className={cn('group flex items-center justify-between text-fg-primary   truncate ', childIsOpen ? 'text-var-yellow' : '')}>
       <span className='text-nowrap truncate max-w-[22vw]'>{folder.name}</span>
      </div>
     </Tooltip>
    </div>
    <FolderSettings folder={folder} />
   </div>

   {/* children is NavTree */}
   {isOpen && children}
  </div>
 )
}

export default FolderLabel
