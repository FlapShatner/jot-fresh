'use client'
import React from 'react'
import { useFolderContext } from '@/app/context/folder-context'

function NavTreeShow({ children }: { children: React.ReactNode }) {
 const folderContext = useFolderContext()
 if (!folderContext) return null
 const { isShowing } = folderContext

 return <div className='w-full'>{isShowing ? children : null}</div>
}

export default NavTreeShow
