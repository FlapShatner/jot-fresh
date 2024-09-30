import React from 'react'
import { validateRequest } from '@/actions/auth-actions'
import { redirect } from 'next/navigation'
import EditorNav from './editor-nav'
import MobileNav from './editor-nav/mobile/mobile-nav'

async function EditorLayout({ children, params }: { children: React.ReactNode; params: { nid: string } }) {
  const { user, session } = await validateRequest()
  if (!user) {
    return redirect('/login')
  }
  return (
    <div className="w-full h-full flex gap-2 p-2 pt-0">
      {/* <EditorNav params={params} /> */}
      <MobileNav>
        <EditorNav params={params} />
      </MobileNav>
      {children}
    </div>
  )
}

export default EditorLayout
