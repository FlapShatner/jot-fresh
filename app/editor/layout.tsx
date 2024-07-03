import React from 'react'
import { validateRequest } from '@/actions/auth-actions'
import { redirect } from 'next/navigation'
import EditorNav from './editor-nav'

async function EditorLayout({ children }: { children: React.ReactNode }) {
 const { user, session } = await validateRequest()
 if (!user) {
  return redirect('/login')
 }
 return (
  <div>
   <div className='w-full h-full flex gap-2 p-2 pt-0'>
    <EditorNav />
    {children}
   </div>
  </div>
 )
}

export default EditorLayout
