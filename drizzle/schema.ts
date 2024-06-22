import { pgTable, serial, text, timestamp, uniqueIndex } from 'drizzle-orm/pg-core'
import { InferSelectModel, InferInsertModel } from 'drizzle-orm'

export const userTable = pgTable(
 'user',
 {
  id: text('id').primaryKey(),
  username: text('username').unique(),
  email: text('email').unique().notNull(),
  password_hash: text('password_hash').notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
 },
 (userTable) => {
  return {
   uniqueIdx: uniqueIndex('unique_idx').on(userTable.email),
  }
 }
)

export const sessionTable = pgTable('session', {
 id: text('id').primaryKey(),
 userId: text('user_id')
  .notNull()
  .references(() => userTable.id),
 expiresAt: timestamp('expires_at', {
  withTimezone: true,
  mode: 'date',
 }).notNull(),
})

export type User = InferSelectModel<typeof userTable>
export type NewUser = InferInsertModel<typeof userTable>
