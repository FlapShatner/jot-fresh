import { NewNote, FolderNew } from '@/app/icons'
import AddFolder from './add-folder'
import Link from 'next/link'
import React from 'react'
import NameFolder from '@/components/floating/name-folder'

function EditorNavHeader() {
 return (
  <div className='relative flex w-full rounded-t-primary bg-bg-secondary justify-end items-center h-9 p-1 px-2 gap-2'>
   <Link href='/editor/new'>
    <NewNote className='text-accent text-lg hover:text-accent-light cursor-pointer' />
   </Link>
   <NameFolder />
  </div>
 )
}

export default EditorNavHeader
