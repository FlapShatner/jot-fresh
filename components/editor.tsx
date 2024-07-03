'use client'
import React, { useState, useEffect } from 'react'
import { useWindowSize, useDebounceValue } from 'usehooks-ts'
import AceEditor from 'react-ace-builds'
import 'ace-builds/src-noconflict/mode-typescript'
import 'ace-builds/src-noconflict/theme-one_dark'
import 'ace-builds/src-noconflict/ext-language_tools'

function Editor({ nid }: { nid: string | null }) {
 const [value, setValue] = useState<string>(nid ? nid : '')
 const [editorHeight, setEditorHeight] = useState('80vh')
 const { width, height } = useWindowSize()
 const [debouncedHeight] = useDebounceValue(height, 100)

 useEffect(() => {
  const viewHeight = `${height - 72}px`
  setEditorHeight(viewHeight)
 }, [debouncedHeight])

 return (
  <AceEditor
   mode='typescript'
   theme='one_dark'
   name='main'
   onChange={(value) => setValue(value)}
   fontSize={12}
   showPrintMargin={false}
   showGutter={true}
   height={editorHeight}
   width={width < 738 ? '100vw' : '70vw'}
   wrapEnabled={true}
   highlightActiveLine={true}
   minLines={10}
   style={{ borderRadius: '8px' }}
   value={value}
   setOptions={{
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: false,
    enableSnippets: false,
    showLineNumbers: true,
    tabSize: 2,
   }}
  />
 )
}

export default Editor
