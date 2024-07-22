import TooltipWrap from '@/components/header/tooltip'
import { useParams, useRouter } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import React, { Suspense } from 'react'
import { deleteNote } from '@/actions/note-actions'
import { Save, Settings, Trash } from '../icons'
import DeleteConfirm from '@/components/popover/delete-confirm'

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
    <TooltipWrap tooltip={{ id: 'trash', content: 'Delete note (Ctrl+D)' }}>
     <button popoverTarget='trashpo'>
      <Trash className='text-var-red text-lg  cursor-pointer hover:text-red-400' />
     </button>
    </TooltipWrap>
    <TooltipWrap
     place='top-start'
     tooltip={{ id: 'save', content: 'Save (Ctrl+S)' }}>
     <div onClick={handleSave}>
      <Save className='text-accent text-xl hover:text-accent-light cursor-pointer mr-1' />
     </div>
    </TooltipWrap>
    <TooltipWrap
     place='top-start'
     tooltip={{ id: 'settings', content: 'Settings' }}>
     <button popoverTarget='settingspo'>
      <Settings className='text-var-grey-mid text-xl cursor-pointer hover:text-var-grey-light' />
     </button>
    </TooltipWrap>
   </div>
   <DeleteConfirm handleClick={handleDelete} />
  </div>
 )
}

export default EditorHeader
