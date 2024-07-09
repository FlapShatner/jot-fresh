'use server'
import { noteData } from '@/dl/queries'
import { CreateNote, NewNote } from '@/drizzle/schema'
import { validateRequest } from '@/actions/auth-actions'
import { isAscii } from 'validator'
import { generateIdFromEntropySize } from 'lucia'
import type { Session, User } from 'lucia'
import { ActionResult } from 'next/dist/server/app-render/types'

export async function createNote(newNote: CreateNote): Promise<ActionResult> {
 const { user, session } = await validateRequest()
 if (!user) {
  return {
   error: 'Unauthorized',
  }
 }
 const { title, content } = newNote
 if (!title || !content) {
  return {
   error: 'Missing required fields.',
  }
 }
 if (!isAscii(title)) {
  return {
   error: 'Invalid title.',
  }
 }
 const noteId = generateIdFromEntropySize(10)
 const result = await noteData.insertNote({
  title,
  content,
  userId: user.id,
  id: noteId,
 })
 console.log(result)
 return result
 //  return redirect('/')
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
