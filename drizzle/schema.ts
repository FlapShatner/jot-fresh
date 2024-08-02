import { pgTable, serial, text, timestamp, uniqueIndex, boolean } from 'drizzle-orm/pg-core'
import { InferSelectModel, InferInsertModel, relations, is } from 'drizzle-orm'

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
 folders: many(foldersTable),
}))

export const foldersTable = pgTable('folders', {
 id: text('id').primaryKey(),
 name: text('name').notNull(),
 userId: text('user_id')
  .references(() => usersTable.id, { onDelete: 'cascade' })
  .notNull(),
 parentId: text('parent_id'),
 isRoot: boolean('is_root').default(false).notNull(),
 createdAt: timestamp('createdAt').defaultNow().notNull(),
})

export const foldersRelations = relations(foldersTable, ({ one, many }) => ({
 user: one(usersTable, {
  fields: [foldersTable.userId],
  references: [usersTable.id],
 }),
 parent: one(foldersTable, {
  fields: [foldersTable.parentId],
  references: [foldersTable.id],
  relationName: 'parentChild',
 }),
 notes: many(notesTable),
 folders: many(foldersTable, { relationName: 'parentChild' }),
}))

export const notesTable = pgTable('notes', {
 id: text('id').primaryKey(),
 title: text('title').notNull(),
 content: text('content').notNull(),
 folderId: text('folder_id').references(() => foldersTable.id, { onDelete: 'cascade' }),
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
 folder: one(foldersTable, {
  fields: [notesTable.folderId],
  references: [foldersTable.id],
 }),
}))

export type Note = InferSelectModel<typeof notesTable>
export type NewNote = InferInsertModel<typeof notesTable>

export type User = InferSelectModel<typeof usersTable>
export type NewUser = InferInsertModel<typeof usersTable>

export type UpdateNote = { id: string; folderId: string; userId: string; title: string; content: string; updatedAt: Date }
export type CreateNote = { title: string; content: string }

export type Folder = InferSelectModel<typeof foldersTable>
export type FolderWithNotesAndFolders = Folder & { notes?: Note[]; folders?: FolderWithNotesAndFolders[] }
export type NewFolder = InferInsertModel<typeof foldersTable>
