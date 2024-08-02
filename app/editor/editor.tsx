'use client'
import React, { useState, useEffect, Suspense, useDeferredValue } from 'react'
import { useRouter } from 'next/navigation'
import { useWindowSize, useDebounceValue } from 'usehooks-ts'
import AceEditor from 'react-ace-builds'
import { createNote, getNote, deleteNote, updateNote } from '@/actions/note-actions'
import type { Note } from '@/drizzle/schema'

import 'ace-builds/src-noconflict/mode-typescript'
import 'ace-builds/src-noconflict/theme-one_dark'
import 'ace-builds/src-noconflict/ext-language_tools'
import EditorHeader from './editor-header'

function Editor({ nid }: { nid: string | null }) {
 const [authorId, setAuthorId] = useState<string | null>(null)
 const [content, setContent] = useState<string>('')
 const [folderId, setFolderId] = useState<string | null>(null)
 const [title, setTitle] = useState<string>('')
 const [editorHeight, setEditorHeight] = useState('87vh')
 const { width, height } = useWindowSize()
 const [debouncedHeight] = useDebounceValue(height, 100)
 const router = useRouter()

 const handleSave = async () => {
  console.log(content)
  if (!!nid && !!authorId) {
   const result: Note | { error: string } = await updateNote({
    userId: authorId,
    folderId: folderId ?? '',
    id: nid,
    title,
    content,
    updatedAt: new Date(),
   })
   console.log(result)
   return
  }
  const result: Note | { error: string } = await createNote({
   title,
   content,
  })
  if ('error' in result) {
   alert(result.error)
   return
  }
 }

 const handleDelete = async () => {
  if (!nid || !authorId) return
  const data = {
   id: nid,
   userId: authorId,
  }
  const result: Note[] | { error: string } = await deleteNote(data)
  router.push('/editor/new')
  if ('error' in result) {
   alert(result.error)
   return
  }
  console.log(result[0].id, 'deleted')
 }

 const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
  //   console.log(e)
  if (e.key === 's' && e.ctrlKey) {
   e.preventDefault()
   handleSave()
  }
  if (e.key === 'n' && e.ctrlKey && e.altKey) {
   e.preventDefault()
   router.push('/editor/new')
  }
  if (e.key === 'e' && e.ctrlKey) {
   e.preventDefault()
   handleDelete()
   router.push('/editor/new')
  }
 }

 useEffect(() => {
  const viewHeight = `${height - 108}px`
  setEditorHeight(viewHeight)
 }, [debouncedHeight])

 useEffect(() => {
  async function getNoteData() {
   if (!nid) {
    setContent('')
    setTitle('')
    setAuthorId(null)
    return
   }
   if (nid) {
    const note: Note | { error: string } = await getNote(nid)
    if ('error' in note) {
     alert(note.error)
     return
    }
    if (note) {
     setContent(note.content)
     setTitle(note.title)
     setAuthorId(note.userId)
     setFolderId(note.folderId)
    }
   }
  }
  getNoteData()
 }, [nid])

 return (
  <div className='flex flex-col pt-0'>
   <EditorHeader
    isNid={nid !== null}
    title={title}
    setTitle={setTitle}
    handleSave={handleSave}
    handleDelete={handleDelete}
   />
   <div onKeyDown={(e) => handleKeyDown(e)}>
    <div
     style={{ width: width < 738 ? '100vw' : '70vw', height: editorHeight }}
     className='bg-var-editor-bg rounded-b-primary'>
     <AceEditor
      mode='typescript'
      theme='one_dark'
      name='main'
      onChange={(value) => setContent(value)}
      fontSize={12}
      showPrintMargin={false}
      showGutter={true}
      height={editorHeight}
      width={width < 738 ? '100vw' : '70vw'}
      wrapEnabled={true}
      highlightActiveLine={true}
      minLines={10}
      style={{ borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px' }}
      value={content}
      setOptions={{
       enableBasicAutocompletion: true,
       enableLiveAutocompletion: false,
       enableSnippets: false,
       showLineNumbers: true,
       tabSize: 2,
      }}
     />
    </div>
   </div>
  </div>
 )
}

export default Editor
