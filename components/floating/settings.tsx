'use client'
import React, { useState } from 'react'
import { useFloating, offset, flip, shift, autoUpdate, useClick, useDismiss, useInteractions, useTransitionStyles } from '@floating-ui/react'
import { Settings as SettingsIcon } from '@/app/icons'
import FolderSelect from './folder-select'
import { Folder } from '@/drizzle/schema'

function Settings() {
 const [isOpen, setIsOpen] = useState(false)
 const { refs, floatingStyles, context } = useFloating<HTMLButtonElement>({
  open: isOpen,
  placement: 'bottom',
  onOpenChange: setIsOpen,
  middleware: [offset(10), flip(), shift()],
  whileElementsMounted: autoUpdate,
 })

 const click = useClick(context)
 const dismiss = useDismiss(context)
 const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss])
 const { isMounted, styles } = useTransitionStyles(context)
 return (
  <>
   <div
    ref={refs.setReference}
    {...getReferenceProps()}>
    <SettingsIcon className='text-fg-secondary text-xl cursor-pointer hover:text-fg-primary' />
   </div>
   {isMounted && (
    <div
     {...getFloatingProps()}
     ref={refs.setFloating}
     style={{ ...styles, ...floatingStyles }}
     className='flex flex-col p-2 gap-2 items-center  rounded-primary bg-bg-secondary border border-fg-secondary text-fg-secondary z-50'>
     <p className='text-fg-secondary text-sm'>Note Settings</p>
     <FolderSelect />
    </div>
   )}
  </>
 )
}

export default Settings
