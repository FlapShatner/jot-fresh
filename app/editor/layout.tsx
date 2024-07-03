import React from 'react'
import EditorNav from './editor-nav'

function EditorLayout({ children }: { children: React.ReactNode }) {
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
