'use client'
import React from 'react'
import { NoteProvider } from '../context/note-context'
import Editor from './editor'

function EditorCtx({ children }: { children: React.ReactNode }) {
 return <NoteProvider>{children}</NoteProvider>
}

export default EditorCtx
