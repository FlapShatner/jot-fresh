import { Folder } from '@/drizzle/schema'
import React from 'react'
import { cn } from '@/lib/cn'
import { Folder as FolderIcon } from '@/app/icons'

function NavFolder({ folder }: { folder: Folder }) {
 if (folder.isRoot) {
  return
 }
 return (
  <div
   key={folder.id}
   className={cn('flex w-full items-center px-2 gap-1')}>
   <FolderIcon className='text-fg-primary hover:text-var-blue-light cursor-pointer' />
   <div className={cn('text-fg-primary text-sm w-full')}>{folder.name}</div>
  </div>
 )
}

export default NavFolder
