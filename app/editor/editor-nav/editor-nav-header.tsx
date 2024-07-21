import { NewNote, FolderNew } from '@/app/icons'
import AddFolder from './add-folder'
import TooltipWrap from '@/components/header/tooltip'
import Link from 'next/link'
import React from 'react'
import NameFolder from '@/components/popover/name-folder'

function EditorNavHeader() {
 return (
  <div className='flex w-full rounded-t-primary bg-bg-secondary justify-end items-center h-9 p-1 px-2 gap-2'>
   <TooltipWrap tooltip={{ id: 'new', content: 'New note (Ctrl+Alt+N)' }}>
    <Link href='/editor/new'>
     <NewNote className='text-accent text-lg hover:text-accent-light cursor-pointer' />
    </Link>
   </TooltipWrap>
   {/* <TooltipWrap tooltip={{ id: 'folder', content: 'New folder (Ctrl+Alt+F)' }}> */}
   <button
    className='text-var-blue'
    popoverTarget='folderpo'>
    <FolderNew className='text-var-blue text-[1.4em] hover:text-var-blue-light cursor-pointer' />
   </button>
   {/* </TooltipWrap> */}
   <NameFolder />
  </div>
 )
}

export default EditorNavHeader
