import React, { Suspense } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { deleteNote } from '@/actions/note-actions'
import DeleteConfirm from '@/components/floating/delete-confirm'
import { Save, Trash } from '../icons'
import Settings from '@/components/floating/settings'

function EditorHeader({
 title,
 setTitle,
 handleSave,
 handleDelete,
 isNid,
}: {
 title: string
 setTitle: React.Dispatch<React.SetStateAction<string>>
 handleSave: () => void
 handleDelete: () => void
 isNid: boolean
}) {
 const router = useRouter()
 const { nid } = useParams()
 const noteId = Array.isArray(nid) ? nid[0] : nid

 return (
  <div className='flex w-full rounded-t-primary bg-bg-secondary justify-between items-center p-1'>
   <input
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    type='text'
    placeholder={isNid ? '' : 'Untitled'}
    className='text-fg-primary bg-bg-secondary text-xl w-1/2'
   />
   <div className='flex gap-2'>
    <DeleteConfirm handleClick={handleDelete} />
    <div onClick={handleSave}>
     <Save className='text-accent text-xl hover:text-accent-light cursor-pointer ' />
    </div>
    <Settings />
   </div>
  </div>
 )
}

export default EditorHeader
