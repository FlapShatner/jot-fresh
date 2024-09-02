'use client'
import React, { useState } from 'react'
import { useFloating, offset, flip, shift, autoUpdate, useClick, useDismiss, useInteractions, useTransitionStyles } from '@floating-ui/react'
import { Options } from '@/app/icons/options'
import { cn } from '@/lib/cn'
import FolderSelect from '../menu-items/folder-select'
import { Folder } from '@/drizzle/schema'

function SettingsMenu({
 borderColor,
 title = '',
 children,
 target,
 className = '',
 noHeader = false,
}: {
 title?: string
 borderColor?: string
 children: React.ReactNode
 target: React.ReactNode
 className?: string
 noHeader?: boolean
}) {
 const [isOpen, setIsOpen] = useState(false)
 const { refs, floatingStyles, context } = useFloating<HTMLButtonElement>({
  open: isOpen,
  placement: 'bottom-start',
  onOpenChange: setIsOpen,
  middleware: [
   offset({
    mainAxis: 10,
   }),
   flip(),
   shift(),
  ],
  whileElementsMounted: autoUpdate,
 })

 //  console.log('settings rendered', Date.now())

 const click = useClick(context)
 const dismiss = useDismiss(context)
 const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss])
 const { isMounted, styles } = useTransitionStyles(context)
 return (
  <>
   <div
    className={className}
    ref={refs.setReference}
    {...getReferenceProps()}>
    {target}
   </div>
   {isMounted && (
    <div
     {...getFloatingProps()}
     ref={refs.setFloating}
     style={{ ...styles, ...floatingStyles, borderColor: borderColor }}
     className='flex flex-col  items-center  rounded-primary bg-bg-primary border border-fg-secondary text-fg-secondary z-50'>
     {!noHeader && (
      <div className='w-full py-1 pr-2 text-sm flex items-center border-b border-fg-secondary  rounded-t-primary'>
       <div className='min-w-[30px]'>
        <Options className='m-auto' />
       </div>
       {title}
      </div>
     )}
     {children}
    </div>
   )}
  </>
 )
}

export default SettingsMenu
