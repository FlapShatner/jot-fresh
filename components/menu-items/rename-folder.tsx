'use client'
import React, { useState } from 'react'
import { cn } from '@/lib/cn'
import { updateFolder } from '@/actions/folder-actions'
import { FolderEdit } from '@/app/icons'
import { useFloating, offset, flip, shift, autoUpdate, useClick, useDismiss, useInteractions, useTransitionStyles } from '@floating-ui/react'
import { Folder } from '@/drizzle/schema'

function RenameFolder({ folder }: { folder: Folder }) {
 const [folderName, setFolderName] = useState(folder.name)
 const [isOpen, setIsOpen] = useState(false)
 const { refs, floatingStyles, context } = useFloating<HTMLButtonElement>({
  open: isOpen,
  placement: 'left-start',
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
 const handleClick = async () => {
  const result: Folder | { error: string } = await updateFolder({
   id: folder.id,
   name: folderName,
   parentId: folder.parentId ? folder.parentId : '',
   userId: folder.userId,
  })
  if ('error' in result) {
   alert(result.error)
   return
  }
  setIsOpen(false)
 }
 return (
  <>
   <div
    ref={refs.setReference}
    {...getReferenceProps()}
    className={cn('py-1 pr-2 text-sm flex items-center bg-bg-secondary rounded-primary cursor-pointer hover:bg-var-editor-active')}>
    <div className='w-[30px] '>
     <FolderEdit className='m-auto text-fg-secondary text-base cursor-pointer hover:text-fg-primary' />
    </div>
    Rename folder
   </div>
   {isMounted && (
    <div
     {...getFloatingProps()}
     ref={refs.setFloating}
     style={{ ...styles, ...floatingStyles }}
     className='flex flex-col p-2 pt-1 gap-2 items-center  rounded-primary bg-bg-secondary border border-var-blue text-fg-secondary z-50'>
     <p className='w-full'>Rename:</p>
     <input
      value={folderName}
      onChange={(e) => setFolderName(e.target.value)}
      id='folder-name'
      name='folder-name'
      className='text-fg-primary bg-var-editor-active rounded-md pl-2 w-36'
      placeholder='New name'
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

export default RenameFolder
