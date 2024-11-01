'use client'
import React, { use, useLayoutEffect, useState } from 'react'
import { cn } from '@/lib/cn'
import { useWindowSize } from 'usehooks-ts'
import MobileNav from '@/components/floating/mobile-nav'
import { SidebarExpand } from '@/app/icons/sidebar-expand'
import Editor from '../editor'
import EditorNav from './editor-nav'

function EditorNavMobile({ children }: { children: React.ReactNode }) {
 const [editorHeight, setEditorHeight] = useState('87vh')
 const [isOpen, setIsOpen] = useState(false)
 const { height } = useWindowSize()
 useLayoutEffect(() => {
  const viewHeight = `${height - 74}px`
  setEditorHeight(viewHeight)
 }, [height])

 return (
  <div className={cn('flex', isOpen && 'min-w-[50vw]')}>
   {isOpen ? children : null}
   <div
    onClick={() => setIsOpen(!isOpen)}
    style={{ height: editorHeight }}
    className={cn(
     'cursor-pointer flex items-center bg-var-editor-bg rounded-primary my-auto hover:bg-var-editor-active',
     isOpen && 'border-l-2 border-bg-secondary'
    )}>
    <SidebarExpand className={cn('w-8 h-8 -mx-1 text-fg-secondary hover:text-fg-primary transition-transform', isOpen && 'rotate-180')} />
   </div>
  </div>
 )
}

export default EditorNavMobile
