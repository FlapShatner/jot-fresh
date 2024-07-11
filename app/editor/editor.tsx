'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useWindowSize, useDebounceValue } from 'usehooks-ts'
import AceEditor from 'react-ace-builds'
import { createNote, getNote } from '@/actions/note-actions'

import 'ace-builds/src-noconflict/mode-typescript'
import 'ace-builds/src-noconflict/theme-one_dark'
import 'ace-builds/src-noconflict/ext-language_tools'
import EditorHeader from './editor-header'

function Editor({ nid }: { nid: string | null }) {
 const [content, setContent] = useState<string>('')
 const [title, setTitle] = useState<string>('')
 const [editorHeight, setEditorHeight] = useState('80vh')
 const { width, height } = useWindowSize()
 const [debouncedHeight] = useDebounceValue(height, 100)

 const router = useRouter()

 const handleSave = async () => {
  console.log(content)
  const result = await createNote({
   title,
   content,
  })
  console.log(await result)
 }

 const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
  console.log(e)
  if (e.key === 's' && e.ctrlKey) {
   e.preventDefault()
   handleSave()
  }
  if (e.key === 'n' && e.ctrlKey && e.altKey) {
   e.preventDefault()
   router.push('/editor/new')
  }
 }

 useEffect(() => {
  const viewHeight = `${height - 108}px`
  setEditorHeight(viewHeight)
 }, [debouncedHeight])

 useEffect(() => {
  async function getNoteData() {
   if (nid) {
    const note = await getNote(nid)
    if (note.error) {
     alert(note.error)
     return
    }
    if (note) {
     setContent(note.content)
     setTitle(note.title)
    }
   }
  }
  getNoteData()
 }, [nid])

 return (
  <div className='flex flex-col pt-0'>
   <EditorHeader
    title={title}
    setTitle={setTitle}
    handleSave={handleSave}
   />
   <div onKeyDown={(e) => handleKeyDown(e)}>
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
 )
}

export default Editor
