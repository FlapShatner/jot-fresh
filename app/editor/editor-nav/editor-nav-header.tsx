'use client'
import { NewNote } from '@/app/icons'
import { Collapse } from '@/app/icons/collapse'
import { Expand } from '@/app/icons/expand'
import { useFolderContext } from '@/app/context/folder-context'
import Link from 'next/link'
import React from 'react'
import NameFolder from '@/components/floating/name-folder'
import Tooltip from '@/components/floating/tooltip'
import { useWindowSize } from "usehooks-ts";
import { cn } from "@/lib/cn";
import jotConfig from "@/jot.config";

function EditorNavHeader() {
 const folderContext = useFolderContext()
 if (!folderContext) {
  return null
 }
 const { width } = useWindowSize();
 const isMobile = width <= jotConfig.breakpoints.sm;
 const { areFoldersOpen, expandAll, collapseAll } = folderContext
 return (
  <div className={cn('relative flex w-full rounded-t-primary bg-bg-secondary justify-between items-center h-9 p-1 px-2 gap-2' )}>
   <div className='flex gap-2'>
    <Tooltip label='Collapse all folders'>
     <Collapse
      onClick={collapseAll}
      className='text-var-green text-[1.1em]  cursor-pointer'
     />
    </Tooltip>
    <Tooltip label='Expand all folders'>
     <Expand
      onClick={expandAll}
      className='text-var-green text-[1.1em]  cursor-pointer'
     />
    </Tooltip>
   </div>
   {/* <Search /> */}
   <div className='flex gap-2'>
    <Tooltip label='Create a new note'>
     <Link href='/editor/new'>
      <NewNote className='text-accent text-[1.4em] hover:text-accent-light cursor-pointer' />
     </Link>
    </Tooltip>
    <Tooltip label='Create a new folder'>
     <NameFolder />
    </Tooltip>
   </div>
  </div>
 )
}

export default EditorNavHeader
