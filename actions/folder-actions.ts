'use server'
import { NewFolder } from '@/drizzle/schema'
import { isAscii } from 'validator'
import { validateRequest } from './auth-actions'
import { generateIdFromEntropySize } from 'lucia'
import { folderData } from '@/dl/queries'
import { revalidatePath } from 'next/cache'
import { ActionResult } from 'next/dist/server/app-render/types'

export async function createFolder(newFolder: { name: string; parentId?: string }) {
 const { user, session } = await validateRequest()
 if (!user) {
  return {
   error: 'Unauthorized',
  }
 }
 if (!newFolder.name) {
  return {
   error: 'Missing required fields.',
  }
 }
 if (newFolder.name && !isAscii(newFolder.name)) {
  return {
   error: 'Invalid title.',
  }
 }
 const rootFolderId: string = await getRootFolderId()

 const folderId = generateIdFromEntropySize(10)
 const newFolderData: NewFolder = {
  name: newFolder.name,
  parentId: newFolder.parentId ?? rootFolderId,
  userId: user.id,
  id: folderId,
 }
 if (newFolder.parentId) {
  newFolderData.parentId = newFolder.parentId
 }
 const result = await folderData.insertFolder(newFolderData)
 console.log(result)
 revalidatePath('/')
 return result
}

export async function createRootFolder(args: { userId: string }): Promise<ActionResult> {
 const folderId = generateIdFromEntropySize(10)
 const newFolderData: NewFolder = {
  name: 'root',
  userId: args.userId,
  id: folderId,
  isRoot: true,
 }
 const result = await folderData.insertFolder(newFolderData)
 console.log(result)
 revalidatePath('/')
 return result
}

export async function getFolders(): Promise<ActionResult> {
 const { user, session } = await validateRequest()
 if (!user) {
  return {
   error: 'Unauthorized',
  }
 }
 const result = await folderData.getAll({ userId: user.id })
 return result
 //  return redirect('/')
}

export async function getRootFolderId(): Promise<ActionResult> {
 const { user, session } = await validateRequest()
 if (!user) {
  return {
   error: 'Unauthorized',
  }
 }
 const result = await folderData.getAll({ userId: user.id })
 if (!result.length) {
  return {
   error: 'No root folder found',
  }
 }
 const rootFolder = result.find((folder) => folder.isRoot)
 if (!rootFolder) {
  return {
   error: 'No root folder found',
  }
 }
 return rootFolder.id
}
