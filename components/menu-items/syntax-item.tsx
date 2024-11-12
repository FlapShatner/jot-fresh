import React from 'react'
import { cn } from '@/lib/cn'
import { updateNote, getNote } from '@/actions/note-actions'
import { useNoteContext } from '@/app/context/note-context'
import { Note } from '@/drizzle/schema'

type Props = {
 syntaxTitle: string
 nid: string
 item: { name: string; title: string }
 setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function SyntaxItem({ syntaxTitle, item, setIsOpen, nid }: Props) {
 const noteContext = useNoteContext()
 const handleClick = async () => {
  if (!nid) {
   noteContext?.setEditorSyntax(item.name)
   setIsOpen(false)
   return
  }
  const noteId = typeof nid === 'string' ? nid : nid[0]
  const note: Note | { error: string } = await getNote(noteId)
  if ('error' in note) return
  if (note) {
   const result: Note | { error: string } = await updateNote({
    userId: note.userId,
    folderId: note.folderId ?? '',
    id: noteId,
    syntax: item.name,
    title: note.title,
    content: note.content,
    updatedAt: note.updatedAt,
   })
   console.log('updated', result)
   if ('error' in result) return
   noteContext?.setLocalNote(result)
  }
  setIsOpen(false)
 }
 const isSelected = syntaxTitle === item.name
 return (
  <div
   onClick={handleClick}
   className='flex items-start w-full gap-1 px-2 cursor-pointer hover:bg-var-editor-active rounded-primary'
   key={item.name}>
   <div className={cn('mr-auto text-fg-secondary text-base cursor-pointer hover:text-fg-primary', isSelected && 'text-var-yellow')}>{item.title}</div>
  </div>
 )
}

export default SyntaxItem
