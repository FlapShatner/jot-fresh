import db from '@/drizzle/db'
import { NewUser, User, userTable } from '@/drizzle/schema'

export const userData = {
 getAll: async () => {
  return await db.query.userTable.findMany()
 },
 insertUser: async (user: NewUser): Promise<User[]> => {
  return db.insert(userTable).values(user).returning()
 },
}
