import { Note } from '@/drizzle/schema'
import React, { createContext, useContext, useState } from 'react'

type NoteContextType = {
 localNote: Note | null
 setLocalNote: React.Dispatch<React.SetStateAction<Note | null>>
 editorSyntax: string | null
 setEditorSyntax: React.Dispatch<React.SetStateAction<string | null>>
}

const NoteContext = createContext<NoteContextType | null>(null)

export const NoteProvider = ({ children }: { children: React.ReactNode }) => {
 const [localNote, setLocalNote] = useState<Note | null>(null)
 const [editorSyntax, setEditorSyntax] = useState<string | null>(null)

 return <NoteContext.Provider value={{ localNote, setLocalNote, editorSyntax, setEditorSyntax }}>{children}</NoteContext.Provider>
}

export const useNoteContext = () => useContext(NoteContext)
