import React from 'react'
import { validateRequest } from '@/actions/auth-actions'
import { redirect } from 'next/navigation'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'

import EditorNav from './editor-nav'
import BreakpointHandler from './editor-nav/breakpoint-handler'

async function EditorLayout({ children, params }: { children: React.ReactNode; params: { nid: string } }) {
 const { user, session } = await validateRequest()
 if (!user) {
  return redirect('/login')
 }
 return (
  <div className='w-full h-full flex gap-2 p-2 pt-0'>
   <BreakpointHandler nav={<EditorNav params={params} />} />
   {children}
  </div>
 )
}

export default EditorLayout
