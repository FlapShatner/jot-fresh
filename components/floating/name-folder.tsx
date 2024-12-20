'use client'
import React, { useState } from 'react'
import { createFolder } from '@/actions/folder-actions'
import { useFloating, offset, flip, shift, autoUpdate, useClick, useDismiss, useInteractions, useTransitionStyles } from '@floating-ui/react'
import { FolderNew } from '@/app/icons'

function NameFolder() {
 const [isOpen, setIsOpen] = useState(false)
 const [folderName, setFolderName] = useState('')
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
 const handleClick = async () => {
  const result: any = await createFolder({ name: folderName, parentId: '' })
  if ('error' in result) {
   alert(result.error)
   setIsOpen(false)
   return
  }
  setIsOpen(false)
 }
 return (
  <>
   <div
    ref={refs.setReference}
    {...getReferenceProps()}
    className='text-var-green h-full'>
    <FolderNew className='text-var-green text-[1.4em]  cursor-pointer' />
   </div>
   {isMounted && (
    <div
     {...getFloatingProps()}
     ref={refs.setFloating}
     style={{ ...styles, ...floatingStyles }}
     className='flex flex-col p-2 gap-2 items-center  rounded-primary bg-bg-secondary border border-var-blue text-fg-secondary z-50'>
     <input
      value={folderName}
      onChange={(e) => setFolderName(e.target.value)}
      id='folder-name'
      name='folder-name'
      className='text-fg-primary bg-var-editor-active rounded-md pl-2 w-36'
      placeholder='New folder'
      type='text'
     />
     <div className='flex gap-2 w-full'>
      <button
       onClick={() => setIsOpen(false)}
       className='px-1 w-full border-2 border-transparent rounded-md hover:bg-red-500/20 hover:border-red-500/10'>
       <p className='text-fg-primary text-sm'>Cancel</p>
      </button>
      <button
       onClick={handleClick}
       className='w-full px-1  bg-var-blue hover:bg-var-blue-light border border-var-blue hover:border-var-blue-light rounded-md'>
       <p className='text-blue-900 font-bold text-sm'>Ok</p>
      </button>
     </div>
    </div>
   )}
  </>
 )
}

export default NameFolder
