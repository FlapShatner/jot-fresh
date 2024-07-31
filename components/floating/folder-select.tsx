'use client'
import React, { useState } from 'react'
import { useFloating, offset, flip, shift, autoUpdate, useClick, useDismiss, useInteractions, useTransitionStyles } from '@floating-ui/react'
import { Settings as SettingsIcon } from '@/app/icons'
function FolderSelect() {
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
    Select a folder
   </div>
   <div
    {...getFloatingProps()}
    ref={refs.setFloating}
    style={{ ...styles, ...floatingStyles }}>
    <p>folder1</p>
    <p>folder2</p>
    <p>folder3</p>
    <p>folder4</p>
   </div>
  </>
 )
}

export default FolderSelect
