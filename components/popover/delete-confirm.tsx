import React, { useRef } from 'react'

function DeleteConfirm({ handleClick }: { handleClick: () => void }) {
 const ref = useRef<HTMLDivElement>(null)
 const handleClose = () => {
  if (ref.current) {
   ref.current.hidePopover()
  }
 }
 return (
  <div
   ref={ref}
   className='flex flex-col pb-2 px-2 items-center  rounded-primary bg-bg-secondary border border-var-red text-fg-secondary'
   popover='auto'
   id='trashpo'>
   <p className='px-2 pb-2'>Confirm delete?</p>
   <div className='flex gap-2'>
    <button
     onClick={handleClose}
     className='px-2 text-fg-secondary border-2 border-transparent rounded-md hover:bg-red-500/20 hover:border-red-500/10'>
     Cancel
    </button>
    <button
     onClick={handleClick}
     className='bg-var-red px-2 text-white  hover:bg-red-400 border-2 border-var-red hover:border-red-400 rounded-md'>
     Delete
    </button>
   </div>
  </div>
 )
}

export default DeleteConfirm
