import db from '@/drizzle/db'
import { NewUser, User, userTable } from '@/drizzle/schema'
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
