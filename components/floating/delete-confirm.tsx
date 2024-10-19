'use client'
import React, { useState } from 'react'
import { Trash } from '@/app/icons'
import { useFloating, offset, flip, shift, autoUpdate, useClick, useDismiss, useInteractions, useTransitionStyles } from '@floating-ui/react'

function DeleteConfirm({ handleClick, target }: { handleClick: () => void; target: React.ReactNode }) {
 const [isOpen, setIsOpen] = useState(false)
 const { refs, floatingStyles, context } = useFloating<HTMLButtonElement>({
  open: isOpen,
  placement: 'bottom-start',
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
    {...getReferenceProps()}
    className='flex gap-2 items-center w-full'>
    {target}
   </div>
   {isMounted && (
    <div
     {...getFloatingProps()}
     ref={refs.setFloating}
     style={{ ...styles, ...floatingStyles }}
     className='flex flex-col p-2  items-center  rounded-primary bg-bg-secondary border border-var-red text-fg-secondary z-50'>
     <p className='px-2 pb-2'>Confirm delete?</p>
     <div className='flex gap-2'>
      <button
       onClick={() => setIsOpen(false)}
       className='text-sm px-2 text-fg-secondary border-2 border-transparent rounded-md hover:bg-red-500/20 hover:border-red-500/10'>
       Cancel
      </button>
      <button
       onClick={handleClick}
       className='text-sm bg-var-red px-2 text-white  hover:bg-red-400 border-2 border-var-red hover:border-red-400 rounded-md'>
       Delete
      </button>
     </div>
    </div>
   )}
  </>
 )
}

export default DeleteConfirm
