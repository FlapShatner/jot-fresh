import db from '@/drizzle/db'
import { NewNote, NewUser, Note, notesTable, User, usersTable, UpdateNote } from '@/drizzle/schema'
import { eq } from 'drizzle-orm'

export const userData = {
 getAll: async () => {
  return await db.query.usersTable.findMany()
 },
 getUserByEmail: async (email: string): Promise<User | null> => {
  const user = await db.query.usersTable.findFirst({ where: eq(usersTable.email, email) })
  return user ?? null
 },
 getUserByUsername: async (username: string): Promise<User | null> => {
  const user = await db.query.usersTable.findFirst({ where: eq(usersTable.username, username) })
  return user ?? null
 },
 insertUser: async (user: NewUser): Promise<User[]> => {
  return db.insert(usersTable).values(user).returning()
 },
}

export const noteData = {
 getAll: async ({ userId }: { userId: string }): Promise<Note[]> => {
  const userWithNotes = await db.query.usersTable.findFirst({
   where: eq(usersTable.id, userId),
   with: { notes: true },
  })
  return userWithNotes?.notes ?? []
 },
 getNoteById: async (id: string): Promise<Note | null> => {
  const note = await db.query.notesTable.findFirst({ where: eq(notesTable.id, id) })
  return note ?? null
 },
 insertNote: async (note: NewNote): Promise<Note[]> => {
  return db.insert(notesTable).values(note).returning()
 },
 updateNote: async (note: UpdateNote): Promise<Note[]> => {
  return db.update(notesTable).set(note).where(eq(notesTable.id, note.id)).returning()
 },
 deleteNoteById: async (id: string): Promise<Note[]> => {
  return db.delete(notesTable).where(eq(notesTable.id, id)).returning()
 },
}
