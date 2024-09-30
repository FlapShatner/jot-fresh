'use client'
import React, { useState } from 'react'
import { cn } from '@/lib/cn'
import { SidebarExpand, SidebarCollapse } from '@/app/icons'

function MobileNav({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(true)
  return (
    <div className={cn('relative  w-8 nav-height bg-bg-secondary flex items-center justify-center rounded-primary', expanded && 'w-full ')}>
      {!expanded &&
        <div onClick={() => setExpanded(!expanded)} className="relative w-8 h-full flex items-center justify-center bg-var-editor-bg rounded-primary group">
          <div className="absolute  top-0 left-0 h-9 w-full bg-bg-secondary rounded-t-primary" />
          <SidebarExpand className="w-6 h-6 rotate-180 text-fg-secondary group-hover:text-fg-primary" />
        </div>}
      {expanded &&
        <div className="absolute top-0 left-0 w-full h-full bg-bg-secondary flex items-start rounded-primary">
          {children}
          <div onClick={() => setExpanded(!expanded)} className="relative w-8 group h-full flex items-center justify-center bg-var-editor-bg rounded-r-primary">
            <div className="absolute  top-0 left-0 h-9 w-full bg-bg-secondary rounded-tr-primary" />
            <SidebarCollapse className="w-6 h-6 text-fg-secondary group-hover:text-fg-primary" />
          </div>
        </div>}
    </div>
  )
}

export default MobileNav
