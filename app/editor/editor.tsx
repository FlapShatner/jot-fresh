'use client'
import React, { useState, useEffect, Suspense, useDeferredValue } from 'react'
import { redirect, useRouter } from 'next/navigation'
import { useWindowSize, useDebounceValue } from 'usehooks-ts'
import AceEditor from 'react-ace-builds'
import { createNote, getNote, deleteNote, updateNote } from '@/actions/note-actions'
import type { Note } from '@/drizzle/schema'
import { useNoteContext } from '../context/note-context'

import 'ace-builds/src-noconflict/mode-typescript'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/mode-html'
import 'ace-builds/src-noconflict/mode-css'
import 'ace-builds/src-noconflict/mode-markdown'
import 'ace-builds/src-noconflict/mode-json'
import 'ace-builds/src-noconflict/mode-java'
import 'ace-builds/src-noconflict/mode-mysql'
import 'ace-builds/src-noconflict/mode-pgsql'
import 'ace-builds/src-noconflict/mode-plain_text'
import 'ace-builds/src-noconflict/mode-powershell'
import 'ace-builds/src-noconflict/mode-rust'
import 'ace-builds/src-noconflict/mode-sh'
import 'ace-builds/src-noconflict/mode-sql'
import 'ace-builds/src-noconflict/mode-tsx'
import 'ace-builds/src-noconflict/mode-jsx'
import 'ace-builds/src-noconflict/mode-toml'
import 'ace-builds/src-noconflict/mode-yaml'
import 'ace-builds/src-noconflict/mode-python'

import 'ace-builds/src-noconflict/theme-one_dark'
import 'ace-builds/src-noconflict/ext-language_tools'
import EditorHeader from './editor-header'

function Editor({ nid }: { nid: string | null }) {
 const [authorId, setAuthorId] = useState<string | null>(null)
 const [content, setContent] = useState<string>('')
 const [syntax, setSyntax] = useState<string | null>('markdown')
 const [folderId, setFolderId] = useState<string | null>(null)
 const [title, setTitle] = useState<string>('')
 const [editorHeight, setEditorHeight] = useState('87vh')
 const { width, height } = useWindowSize()
 const [debouncedHeight] = useDebounceValue(height, 100)
 const noteContext = useNoteContext()
 const router = useRouter()

 const handleSave = async () => {
  //   console.log(content)
  if (!!nid && !!authorId) {
   const result: Note | { error: string } = await updateNote({
    userId: authorId,
    syntax: syntax ?? '',
    folderId: folderId ?? '',
    id: nid,
    title,
    content,
    updatedAt: new Date(),
   })
   //    console.log(result)
   return
  }
  const result: Note[] | { error: string } = await createNote({
   title,
   content,
   syntax: syntax ?? 'markdown',
  })
  if ('error' in result) {
   alert(result.error)
   return
  }
  router.push(`/editor/${result[0].id}`)
  console.log(result)
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
  //   console.log(result[0].id, 'deleted')
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
  if (noteContext?.editorSyntax) {
   setSyntax(noteContext.editorSyntax)
  }
 }, [noteContext?.editorSyntax])

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
     setSyntax(note.syntax)
    }
   }
  }
  getNoteData()
 }, [nid, noteContext?.localNote])

 return (
  <div className='flex flex-col pt-0 '>
   <EditorHeader
    isNid={nid !== null}
    title={title}
    setTitle={setTitle}
    handleSave={handleSave}
    handleDelete={handleDelete}
   />
   <div onKeyDown={(e) => handleKeyDown(e)}>
    <div
     style={{ width: '70vw', height: editorHeight }}
     className='bg-var-editor-bg rounded-b-primary'>
     <AceEditor
      mode={syntax ? syntax : 'markdown'}
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
