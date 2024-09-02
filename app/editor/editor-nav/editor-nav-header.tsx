'use client'
import { NewNote, FolderNew } from '@/app/icons'
import AddFolder from './add-folder'
import { Collapse } from '@/app/icons/collapse'
import { Expand } from '@/app/icons/expand'
import { useFolderContext } from '@/app/context/folder-context'
import Link from 'next/link'
import React from 'react'
import NameFolder from '@/components/floating/name-folder'
import Search from './search'
function EditorNavHeader() {
 const folderContext = useFolderContext()
 if (!folderContext) {
  return null
 }
 const { areFoldersOpen, expandAll, collapseAll } = folderContext
 return (
  <div className='relative flex w-full rounded-t-primary bg-bg-secondary justify-between items-center h-9 p-1 px-2 gap-2'>
   <div className='flex gap-2'>
    <Collapse
     onClick={collapseAll}
     className='text-var-green text-[1.1em]  cursor-pointer'
    />
    <Expand
     onClick={expandAll}
     className='text-var-green text-[1.1em]  cursor-pointer'
    />
   </div>
   {/* <Search /> */}
   <div className='flex gap-2'>
    <Link href='/editor/new'>
     <NewNote className='text-accent text-[1.4em] hover:text-accent-light cursor-pointer' />
    </Link>
    <NameFolder />
   </div>
  </div>
 )
}

export default EditorNavHeader
