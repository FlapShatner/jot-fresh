import React from 'react'
import Editor from '@/components/editor'
import { redirect } from 'next/navigation'
import { validateRequest } from '@/actions/auth-actions'

async function EditNote({ params }: { params: { nid: string } }) {
 const { user, session } = await validateRequest()
 if (!user) {
  return redirect('/login')
 }
 const { nid } = params
 return (
  <div>
   <Editor nid={nid} />
  </div>
 )
}

export default EditNote
