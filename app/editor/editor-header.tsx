import React, { useState, useRef, Suspense } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useOnClickOutside } from 'usehooks-ts'
import Tooltip from '@/components/floating/tooltip'
import DeleteConfirm from '@/components/floating/delete-confirm'
import { Save, Trash } from '../icons'
import { Options } from '../icons/options'
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
    <Tooltip label='Delete note'>
     <DeleteConfirm
      target={<Trash className='text-var-red text-lg  cursor-pointer hover:text-red-400' />}
      handleClick={handleDelete}></DeleteConfirm>
    </Tooltip>
    <Tooltip label='Save note'>
     <div onClick={handleSave}>
      <Save className='text-accent text-xl hover:text-accent-light cursor-pointer ' />
     </div>
    </Tooltip>
    <Tooltip label='Note settings'>
     <SettingsMenu
      title='Note Settings'
      target={<Options className='text-fg-secondary text-xl cursor-pointer hover:text-fg-primary' />}>
      <FolderSelect />
      <SyntaxSelect />
     </SettingsMenu>
    </Tooltip>
   </div>
  </div>
 )
}

export default EditorHeader
