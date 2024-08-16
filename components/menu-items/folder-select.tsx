'use client'
import React, { useState, useEffect } from 'react'
import { cn } from '@/lib/cn'
import { useFloating, offset, flip, shift, autoUpdate, useClick, useDismiss, useInteractions, useTransitionStyles } from '@floating-ui/react'
import { useParams, usePathname } from 'next/navigation'
import { Settings as SettingsIcon, FolderMove } from '@/app/icons'
import FolderList from './folder-list'
import { FolderWithNotesAndFolders } from '@/drizzle/schema'
import RenameFolderList from './rename-folder-list'

function FolderSelect({ folder }: { folder?: FolderWithNotesAndFolders }) {
 const [isOpen, setIsOpen] = useState(false)
 const { nid } = useParams()
 const pathname = usePathname()

 const { refs, floatingStyles, context } = useFloating<HTMLButtonElement>({
  open: isOpen,
  placement: 'right-start',
  onOpenChange: setIsOpen,
  middleware: [offset(4), flip(), shift()],
  whileElementsMounted: autoUpdate,
 })

 const click = useClick(context)
 const dismiss = useDismiss(context)
 const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss])
 const { isMounted, styles } = useTransitionStyles(context)
 const isNew = pathname.includes('/editor/new')
 return (
  <>
   <div
    className={cn(
     'py-1 pr-2 text-sm flex items-center bg-bg-secondary rounded-primary cursor-pointer hover:bg-var-editor-active',
     isNew && !folder && 'opacity-30 pointer-events-none'
    )}
    ref={refs.setReference}
    {...getReferenceProps()}>
    <div className='w-[30px] '>
     <FolderMove className='m-auto text-fg-secondary text-base cursor-pointer hover:text-fg-primary' />
    </div>
    Move to folder
   </div>

   {isMounted && (
    <div
     className={cn('flex flex-col px-1  py-1  items-center  rounded-primary bg-bg-secondary border border-fg-secondary text-fg-secondary z-50')}
     {...getFloatingProps()}
     ref={refs.setFloating}
     style={{ ...styles, ...floatingStyles }}>
     {!!folder ? <RenameFolderList folder={folder} /> : <FolderList nid={nid} />}
    </div>
   )}
  </>
 )
}

export default FolderSelect
