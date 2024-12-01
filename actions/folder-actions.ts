'use server'
import { Folder, FolderWithNotesAndFolders, NewFolder, UpdateFolder } from '@/drizzle/schema'
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

 const rootFolderId = await getRootFolderId()
 if (typeof rootFolderId === 'object' && 'error' in rootFolderId) {
  return {
   error: 'No root folder found',
  }
 }

 const folderId = generateIdFromEntropySize(10)
 const newFolderData: NewFolder = {
  name: newFolder.name,
  parentId: newFolder.parentId && newFolder.parentId !== '' ? newFolder.parentId : rootFolderId,
  userId: user.id,
  id: folderId,
 }
 if (newFolder.parentId) {
  newFolderData.parentId = newFolder.parentId
 }
 const result = await folderData.insertFolder(newFolderData)
 //  console.log(result)
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
 //  console.log(result)
 revalidatePath('/')
 return result
}

// TODO: validate that the user is the owner of the folder
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

export async function getRootFolderId() {
 const result: Folder[] = await getFolders()
 const rootFolder = result.find((folder) => folder.isRoot)
 if (!rootFolder) {
  return {
   error: 'No root folder found',
  }
 }
 return rootFolder.id
}

export async function getRootFolder(): Promise<ActionResult> {
 const { user, session } = await validateRequest()
 if (!user) {
  return {
   error: 'Unauthorized',
  }
 }
 const result = await folderData.getRootFolder(user.id)
 if (!result) {
  return {
   error: 'No root folder found',
  }
 }
 return result
}

export async function getFolder(id: string): Promise<ActionResult> {
 const { user, session } = await validateRequest()
 if (!user) {
  return {
   error: 'Unauthorized',
  }
 }
 const result = await folderData.getFolderById(id)
 if (!result) {
  return {
   error: 'Folder not found.',
  }
 }
 if (user.id !== result.userId) {
  return {
   error: 'Unauthorized',
  }
 }
 return result
 //  return redirect('/')
}

export async function updateFolder(newFolder: UpdateFolder): Promise<ActionResult> {
 const { user, session } = await validateRequest()
 if (!user) {
  return {
   error: 'Unauthorized',
  }
 }
 if (user.id !== newFolder.userId) {
  return {
   error: 'Unauthorized',
  }
 }
 const { name, parentId } = newFolder
 let newFolderData: UpdateFolder = {
  name,
  parentId,
  userId: user.id,
  id: newFolder.id,
 }
 if (parentId) {
  newFolderData.parentId = parentId
 }
 const result = await folderData.updateFolder(newFolderData)
 //  console.log(result)
 revalidatePath('/')
 return result
}

export async function deleteFolder(folder: Folder): Promise<ActionResult> {
 const { user, session } = await validateRequest()
 if (!user) {
  return {
   error: 'Unauthorized',
  }
 }
 if (user.id !== folder.userId) {
  return {
   error: 'Unauthorized',
  }
 }
 const { id, isRoot } = folder
 if (isRoot) {
  return {
   error: 'Cannot delete root folder',
  }
 }

 const result = await folderData.deleteFolder(id)
 revalidatePath('/')
 //  console.log(result)
 return result
}
