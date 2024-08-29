'use server'
import { noteData } from '@/dl/queries'
import { CreateNote, NewNote, Note, UpdateNote } from '@/drizzle/schema'
import { validateRequest } from '@/actions/auth-actions'
import { isAscii } from 'validator'
import { generateIdFromEntropySize } from 'lucia'
import type { Session, User } from 'lucia'
import { ActionResult } from 'next/dist/server/app-render/types'
import { revalidatePath } from 'next/cache'
import { getRootFolderId } from './folder-actions'

export type NoteError = { error: string }

export async function createNote(newNote: CreateNote): Promise<ActionResult> {
 const { user, session } = await validateRequest()
 if (!user) {
  return {
   error: 'Unauthorized',
  }
 }
 const { content, syntax } = newNote
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
 const rootFolderId = await getRootFolderId()
 if (typeof rootFolderId === 'object' && 'error' in rootFolderId) {
  return {
   error: 'No root folder found',
  }
 }
 const noteId = generateIdFromEntropySize(10)
 const result = await noteData.insertNote({
  title,
  folderId: rootFolderId,
  content,
  syntax,
  userId: user.id,
  id: noteId,
 })
 //  console.log(result)
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
 const result = await noteData.getAll({ userId: user.id })
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
 if (!result) {
  return {
   error: 'Note not found.',
  }
 }
 if (user.id !== result.userId) {
  return {
   error: 'Unauthorized',
  }
 }
 return result
 //  return redirect('/')
}

export async function deleteNote(data: { id: string; userId: string }): Promise<ActionResult> {
 const { user, session } = await validateRequest()
 if (!user) {
  return {
   error: 'Unauthorized',
  }
 }
 if (user.id !== data.userId) {
  return {
   error: 'Unauthorized',
  }
 }
 const result = await noteData.deleteNoteById(data.id)
 revalidatePath('/')
 //  console.log(result)
 return result
 //  return redirect('/')
}

export async function updateNote(newNote: UpdateNote): Promise<ActionResult> {
 const { user, session } = await validateRequest()
 if (!user) {
  return {
   error: 'Unauthorized',
  }
 }
 if (user.id !== newNote.userId) {
  return {
   error: 'Unauthorized',
  }
 }
 const { content, updatedAt } = newNote
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
 const noteId = newNote.id
 const result = await noteData.updateNote({
  title,
  content,
  syntax: newNote.syntax,
  folderId: newNote.folderId,
  userId: user.id,
  id: noteId,
  updatedAt: updatedAt,
 })
 console.log('updateNote', result)
 revalidatePath(`/`)
 return result
}
