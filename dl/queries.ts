import db from '@/drizzle/db'
import { NewNote, NewUser, Note, noteTable, User, userTable, UpdateNote } from '@/drizzle/schema'
import { eq } from 'drizzle-orm'

export const userData = {
 getAll: async () => {
  return await db.query.userTable.findMany()
 },
 getUserByEmail: async (email: string): Promise<User | null> => {
  const user = await db.query.userTable.findFirst({ where: eq(userTable.email, email) })
  return user ?? null
 },
 getUserByUsername: async (username: string): Promise<User | null> => {
  const user = await db.query.userTable.findFirst({ where: eq(userTable.username, username) })
  return user ?? null
 },
 insertUser: async (user: NewUser): Promise<User[]> => {
  return db.insert(userTable).values(user).returning()
 },
}

export const noteData = {
 getAll: async () => {
  return await db.query.noteTable.findMany()
 },
 getNoteById: async (id: string): Promise<Note | null> => {
  const note = await db.query.noteTable.findFirst({ where: eq(noteTable.id, id) })
  return note ?? null
 },
 insertNote: async (note: NewNote): Promise<Note[]> => {
  return db.insert(noteTable).values(note).returning()
 },
 updateNote: async (note: UpdateNote): Promise<Note[]> => {
  return db.update(noteTable).set(note).where(eq(noteTable.id, note.id)).returning()
 },
}
