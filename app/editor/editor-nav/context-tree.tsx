'use client'
import React from 'react'
import { FolderProvider } from '@/app/context/folder-context'

function ContextTree({ children }: { children: React.ReactNode }) {
 return (
  <FolderProvider>
   {children}
  </FolderProvider>
 )
}

export default ContextTree