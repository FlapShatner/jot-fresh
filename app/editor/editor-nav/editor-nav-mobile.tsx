import React from 'react'
import { SidebarExpand } from '@/app/icons/sidebar-expand'
import { cn } from '@/lib/cn'
import jotConfig from '@/jot.config'

function EditorNavMobile() {
 const bp = jotConfig.breakpoints.sm
 return (
  <div className='cursor-pointer flex items-center h-60 bg-var-editor-bg rounded-primary my-auto hover:bg-var-editor-active'>
   <SidebarExpand className='w-8 h-8 -mx-1 text-fg-secondary hover:text-fg-primary' />
  </div>
 )
}

export default EditorNavMobile
