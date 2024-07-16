'use client'
import { Close, Check } from '@/app/icons'
import React, { useRef } from 'react'

function NameFolder() {
 const ref = useRef<HTMLDivElement>(null)
 const handleClose = () => {
  if (ref.current) {
   ref.current.hidePopover()
  }
 }
 return (
  <div
   id='folderpo'
   ref={ref}
   popover='auto'
   className='flex flex-col gap-2 py-2 px-2 items-center  rounded-primary bg-bg-secondary border border-var-blue text-fg-secondary'>
   <input
    className='text-fg-primary bg-var-editor-active rounded-md '
    type='text'
   />
   <div className='flex gap-2'>
    <button
     onClick={handleClose}
     className='px-2 text-fg-secondary border-2 border-transparent rounded-md hover:bg-red-500/20 hover:border-red-500/10'>
     <Close className='text-var-red text-[1.4em] hover:bg-red-500/20cursor-pointer' />
    </button>
    <button
     // onClick={handleClick}
     className=' px-2 text-white  hover:bg-blue-400/30 border border-transparent hover:border-blue-400 rounded-md'>
     <Check className='text-var-blue text-[1.4em] hover:bg-blue-400/30cursor-pointer' />
    </button>
   </div>
  </div>
 )
}

export default NameFolder
