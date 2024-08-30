'use client'
import React, { useState, useEffect } from 'react'
import { cn } from '@/lib/cn'
import { useFloating, offset, flip, shift, autoUpdate, useClick, useDismiss, useInteractions, useTransitionStyles } from '@floating-ui/react'
import { useParams, usePathname } from 'next/navigation'
import { Settings as SettingsIcon, FolderMove } from '@/app/icons'
import FolderList from './folder-list'
import { FolderWithNotesAndFolders } from '@/drizzle/schema'
import RenameFolderList from './rename-folder-list'
import { syntax } from '@/data/syntax'

function SyntaxSelect() {
 const [isOpen, setIsOpen] = useState(false)
 const { nid } = useParams()
 const pathname = usePathname()

 const { refs, floatingStyles, context } = useFloating<HTMLButtonElement>({
  open: isOpen,
  placement: 'left-start',
  onOpenChange: setIsOpen,
  middleware: [offset(24), flip(), shift()],
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
    ref={refs.setReference}
    {...getReferenceProps()}>
    <div className='w-[30px] '>Language</div>
   </div>
   {isMounted && (
    <div
     className={cn('flex flex-col px-1  py-1  items-start rounded-primary bg-bg-secondary border border-fg-secondary text-fg-secondary z-50')}
     {...getFloatingProps()}
     ref={refs.setFloating}
     style={{ ...styles, ...floatingStyles }}>
     {syntax.map((item) => {
      return (
       <div
        onClick={() => setIsOpen(false)}
        className='flex items-start justify-start gap-1 w-full px-2 cursor-pointer hover:bg-var-editor-active rounded-primary'
        key={item.name}>
        <div className={cn('mr-auto text-fg-secondary text-base text-start cursor-pointer hover:text-fg-primary')}>{item.title}</div>
       </div>
      )
     })}
    </div>
   )}
  </>
 )
}

export default SyntaxSelect
