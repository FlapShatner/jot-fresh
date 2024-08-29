import React, { useState, useRef, Suspense } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useOnClickOutside } from 'usehooks-ts'
import { revalidatePath } from 'next/cache'
import { deleteNote } from '@/actions/note-actions'
import DeleteConfirm from '@/components/floating/delete-confirm'
import { Save, Trash, Settings as SettingsIcon } from '../icons'
import SettingsMenu from '@/components/floating/settings-menu'
import FolderSelect from '@/components/menu-items/folder-select'
import SyntaxSelect from '@/components/menu-items/syntax-select'

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
 const [isInput, setIsInput] = useState(false)
 const ref = useRef(null)
 useOnClickOutside(ref, () => setIsInput(false))
 return (
  <div className='flex w-full rounded-t-primary bg-bg-secondary justify-between items-center p-1'>
   <input
    ref={ref}
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    type='text'
    placeholder={isNid ? '' : 'Untitled'}
    className='text-fg-primary bg-bg-secondary text-xl w-full mr-2'
   />

   <div className='flex gap-2'>
    <DeleteConfirm
     target={<Trash className='text-var-red text-lg  cursor-pointer hover:text-red-400' />}
     handleClick={handleDelete}></DeleteConfirm>
    <div onClick={handleSave}>
     <Save className='text-accent text-xl hover:text-accent-light cursor-pointer ' />
    </div>
    <SettingsMenu
     title='Note Settings'
     target={<SettingsIcon className='text-fg-secondary text-xl cursor-pointer hover:text-fg-primary' />}>
     <FolderSelect />
     <SyntaxSelect />
    </SettingsMenu>
   </div>
  </div>
 )
}

export default EditorHeader
