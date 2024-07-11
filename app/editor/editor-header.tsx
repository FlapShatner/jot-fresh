import TooltipWrap from '@/components/header/tooltip'
import { useParams, useRouter } from 'next/navigation'

import React from 'react'
import { deleteNote } from '@/actions/note-actions'
import { Save, Trash } from '../icons'
import DeleteConfirm from '@/components/popover/delete-confirm'

function EditorHeader({ title, setTitle, handleSave }: { title: string; setTitle: React.Dispatch<React.SetStateAction<string>>; handleSave: () => void }) {
 const router = useRouter()
 const { nid } = useParams()
 const noteId = Array.isArray(nid) ? nid[0] : nid

 const handleDelete = async () => {
  const result = await deleteNote(noteId)
  router.push('/editor/new')
  console.log(result)
 }

 return (
  <div className='flex w-full rounded-t-primary bg-bg-secondary justify-between items-center p-1'>
   <input
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    type='text'
    placeholder='Untitled'
    className='text-fg-primary bg-bg-secondary text-xl w-1/2'
   />
   <div className='flex gap-2'>
    <TooltipWrap tooltip={{ id: 'trash', content: 'Delete note (Ctrl+D)' }}>
     <button popoverTarget='trashpo'>
      <Trash className='text-var-red text-lg  cursor-pointer hover:text-red-400' />
     </button>
    </TooltipWrap>
    <TooltipWrap tooltip={{ id: 'save', content: 'Save (Ctrl+S)' }}>
     <div onClick={handleSave}>
      <Save className='text-accent text-xl hover:text-accent-light cursor-pointer mr-1' />
     </div>
    </TooltipWrap>
   </div>
   <DeleteConfirm handleClick={handleDelete} />
  </div>
 )
}

export default EditorHeader
