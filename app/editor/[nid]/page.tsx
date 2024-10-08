import React from 'react'
import Editor from '../editor'
import EditorCtx from '../editor-ctx'
import { redirect } from 'next/navigation'
import { validateRequest } from '@/actions/auth-actions'

async function EditNote({ params }: { params: { nid: string } }) {
 const { user, session } = await validateRequest()
 if (!user) {
  return redirect('/login')
 }
 const { nid } = params
 return (
  <EditorCtx>
   <Editor nid={nid} />
  </EditorCtx>
 )
}

export default EditNote
