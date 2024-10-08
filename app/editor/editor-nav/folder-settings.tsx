'use client'
import SettingsMenu from '@/components/floating/settings-menu'
import { Options } from '@/app/icons/options'
import FolderSelect from '@/components/menu-items/folder-select'
import RenameFolder from '@/components/menu-items/rename-folder'
import { cn } from '@/lib/cn'
import React from 'react'
import FolderDelete from '@/components/menu-items/folder-delete'
import { FolderWithNotesAndFolders } from '@/drizzle/schema'

function FolderSettings({ folder }: { folder: FolderWithNotesAndFolders }) {
 return (
  <SettingsMenu
   borderColor='var(--green)'
   noHeader={true}
   target={
    <div className={cn('w-6 h-5 cursor-pointer rounded-primary flex items-center justify-center hover:bg-var-editor-active')}>
     <Options className={cn('text-base text-fg-primary  ')} />
    </div>
   }>
   <RenameFolder folder={folder} />
   <FolderSelect folder={folder} />
   <FolderDelete folder={folder} />
  </SettingsMenu>
 )
}

export default FolderSettings
