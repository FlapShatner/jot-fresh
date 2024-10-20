import React from 'react'
import { validateRequest } from '@/actions/auth-actions'
import { redirect } from 'next/navigation'
import EditorNavSelect from './editor-nav/editor-nav-select'
import EditorNav from './editor-nav'
import EditorNavMobile from './editor-nav/editor-nav-mobile'

async function EditorLayout({ children, params }: { children: React.ReactNode; params: { nid: string } }) {
 const { user, session } = await validateRequest()
 if (!user) {
  return redirect('/login')
 }
 return (
  <div className='w-full h-full flex gap-2 p-2 pt-0'>
   <EditorNavSelect
    nav={<EditorNav params={params} />}
    mobileNav={<EditorNavMobile />}
   />
   {children}
  </div>
 )
}

export default EditorLayout
