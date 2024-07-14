import { pgTable, serial, text, timestamp, uniqueIndex } from 'drizzle-orm/pg-core'
import { InferSelectModel, InferInsertModel, relations } from 'drizzle-orm'
import { use } from 'react'

export const usersTable = pgTable(
 'users',
 {
  id: text('id').primaryKey(),
  username: text('username').unique(),
  email: text('email').unique().notNull(),
  password_hash: text('password_hash').notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
 },
 (usersTable) => {
  return {
   uniqueIdx: uniqueIndex('unique_idx').on(usersTable.email),
  }
 }
)

export const usersRelations = relations(usersTable, ({ many }) => ({
 notes: many(notesTable),
}))

export const sessionTable = pgTable('session', {
 id: text('id').primaryKey(),
 userId: text('user_id')
  .notNull()
  .references(() => usersTable.id),
 expiresAt: timestamp('expires_at', {
  withTimezone: true,
  mode: 'date',
 }).notNull(),
})

export const notesTable = pgTable('notes', {
 id: text('id').primaryKey(),
 title: text('title').notNull(),
 content: text('content').notNull(),
 userId: text('user_id')
  .references(() => usersTable.id, { onDelete: 'cascade' })
  .notNull(),
 createdAt: timestamp('createdAt').defaultNow().notNull(),
 updatedAt: timestamp('updatedAt').defaultNow().notNull(),
})

export const notesRelations = relations(notesTable, ({ one }) => ({
 user: one(usersTable, {
  fields: [notesTable.userId],
  references: [usersTable.id],
 }),
}))

export type Note = InferSelectModel<typeof notesTable>
export type NewNote = InferInsertModel<typeof notesTable>

export type User = InferSelectModel<typeof usersTable>
export type NewUser = InferInsertModel<typeof usersTable>

export type UpdateNote = { id: string; userId: string; title: string; content: string; updatedAt: Date }
export type CreateNote = { title: string; content: string }
