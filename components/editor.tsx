'use client'
import React, { useState, useEffect } from 'react'
import { useWindowSize, useDebounceValue } from 'usehooks-ts'
import AceEditor from 'react-ace-builds'
import { createNote } from '@/actions/note-actions'
import { Save } from '@/app/icons/save'
import TooltipWrap from './header/tooltip'

import 'ace-builds/src-noconflict/mode-typescript'
import 'ace-builds/src-noconflict/theme-one_dark'
import 'ace-builds/src-noconflict/ext-language_tools'
import { NewNote } from '@/drizzle/schema'

function Editor({ nid }: { nid: string | null }) {
 const [content, setContent] = useState<string>(nid ? nid : '')
 const [title, setTitle] = useState<string>('')
 const [editorHeight, setEditorHeight] = useState('80vh')
 const { width, height } = useWindowSize()
 const [debouncedHeight] = useDebounceValue(height, 100)

 const handleSave = async () => {
  console.log(content)
  const result = await createNote({
   title,
   content,
  })
  console.log(await result)
 }

 useEffect(() => {
  const viewHeight = `${height - 108}px`
  setEditorHeight(viewHeight)
 }, [debouncedHeight])

 return (
  <div className='flex flex-col pt-0'>
   <div className='flex w-full rounded-t-primary bg-bg-secondary justify-between items-center p-1'>
    <input
     value={title}
     onChange={(e) => setTitle(e.target.value)}
     type='text'
     placeholder='Untitled'
     className='text-fg-primary bg-bg-secondary text-xl w-1/2'
    />
    <TooltipWrap tooltip={{ id: 'save', content: 'Save (Ctrl+S)' }}>
     <div onClick={handleSave}>
      <Save className='text-accent text-xl hover:text-accent-light cursor-pointer mr-1' />
     </div>
    </TooltipWrap>
   </div>
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
 )
}

export default Editor
