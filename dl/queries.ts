import db from '@/drizzle/db'
import { NewUser, User, users } from '@/drizzle/schema'

export const userData = {
 getAll: async () => {
  return await db.query.users.findMany()
 },
 insertUser: async (user: NewUser): Promise<User[]> => {
  return db.insert(users).values(user).returning()
 },
}
