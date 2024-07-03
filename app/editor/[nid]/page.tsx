import React from 'react'
import Editor from '@/components/editor'

function EditNote({ params }: { params: { nid: string } }) {
 const { nid } = params
 return (
  <div>
   <Editor nid={null} />
  </div>
 )
}

export default EditNote
