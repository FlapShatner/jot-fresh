'use client'
import SettingsMenu from '@/components/floating/settings-menu'
import { Settings as SettingsIcon } from '@/app/icons'
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
    <div className={cn('w-6 h-5 rounded-primary flex items-center justify-center hover:bg-var-cyan-trans')}>
     <SettingsIcon className={cn('text-xs text-fg-primary  ')} />
    </div>
   }>
   <RenameFolder folder={folder} />
   <FolderSelect folder={folder} />
   <FolderDelete folder={folder} />
  </SettingsMenu>
 )
}

export default FolderSettings
