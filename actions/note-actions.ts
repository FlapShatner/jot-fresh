'use server'
import { noteData } from '@/dl/queries'
import { CreateNote, NewNote } from '@/drizzle/schema'
import { validateRequest } from '@/actions/auth-actions'
import { isAscii } from 'validator'
import { generateIdFromEntropySize } from 'lucia'
import type { Session, User } from 'lucia'
import { ActionResult } from 'next/dist/server/app-render/types'
import { revalidatePath } from 'next/cache'

export type NoteError = { error: string }

export async function createNote(newNote: CreateNote): Promise<ActionResult> {
 const { user, session } = await validateRequest()
 if (!user) {
  return {
   error: 'Unauthorized',
  }
 }
 const { content } = newNote
 let title = newNote.title
 if (!content) {
  return {
   error: 'Missing required fields.',
  }
 }
 if (title && !isAscii(title)) {
  return {
   error: 'Invalid title.',
  }
 }
 if (!title) {
  title = 'Untitled'
 }
 const noteId = generateIdFromEntropySize(10)
 const result = await noteData.insertNote({
  title,
  content,
  userId: user.id,
  id: noteId,
 })
 console.log(result)
 revalidatePath('/')
 return result
}

export async function getNotes(): Promise<ActionResult> {
 const { user, session } = await validateRequest()
 if (!user) {
  return {
   error: 'Unauthorized',
  }
 }
 const result = await noteData.getAll()
 return result
 //  return redirect('/')
}

export async function getNote(nid: string): Promise<ActionResult> {
 const { user, session } = await validateRequest()
 if (!user) {
  return {
   error: 'Unauthorized',
  }
 }
 const result = await noteData.getNoteById(nid)
 return result
 //  return redirect('/')
}

export async function deleteNote(nid: string): Promise<ActionResult> {
 const { user, session } = await validateRequest()
 if (!user) {
  return {
   error: 'Unauthorized',
  }
 }
 const result = await noteData.deleteNoteById(nid)
 revalidatePath('/')
 return result
 //  return redirect('/')
}
