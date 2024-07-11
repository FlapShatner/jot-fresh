import { New, Trash } from '@/app/icons'
import TooltipWrap from '@/components/header/tooltip'
import Link from 'next/link'
import React from 'react'

function EditorNavHeader() {
 return (
  <div className='flex w-full rounded-t-primary bg-bg-secondary justify-end items-center h-9 p-1 px-2 gap-2'>
   <TooltipWrap tooltip={{ id: 'new', content: 'New note (Ctrl+Alt+N)' }}>
    <Link href='/editor/new'>
     <New className='text-accent text-lg hover:text-accent-light cursor-pointer' />
    </Link>
   </TooltipWrap>
  </div>
 )
}

export default EditorNavHeader
