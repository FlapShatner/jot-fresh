import React from 'react'
import MobileNav from '@/components/floating/mobile-nav'
import { SidebarExpand } from '@/app/icons/sidebar-expand'

function EditorNavMobile() {
 return (
  <div className='my-auto'>
   <MobileNav
    trigger={
     <div className='cursor-pointer flex items-center h-60 bg-var-editor-bg rounded-primary my-auto hover:bg-var-editor-active'>
      <SidebarExpand className='w-8 h-8 -mx-1 text-fg-secondary hover:text-fg-primary' />
     </div>
    }
   />
  </div>
 )
}

export default EditorNavMobile
