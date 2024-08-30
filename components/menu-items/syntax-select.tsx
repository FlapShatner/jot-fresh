'use client'
import React, { useState } from 'react'
import { cn } from '@/lib/cn'
import { useFloating, offset, flip, shift, autoUpdate, useClick, useDismiss, useInteractions, useTransitionStyles } from '@floating-ui/react'
import { useParams, usePathname } from 'next/navigation'
import { syntax } from '@/data/syntax'
import { CiCode } from '@/app/icons/code'
import SyntaxItem from './syntax-item'

function SyntaxSelect() {
 const [isOpen, setIsOpen] = useState(false)
 const { nid } = useParams()
 const pathname = usePathname()

 const { refs, floatingStyles, context } = useFloating<HTMLButtonElement>({
  open: isOpen,
  placement: 'left-start',
  onOpenChange: setIsOpen,
  middleware: [offset(2), flip(), shift()],
  whileElementsMounted: autoUpdate,
 })

 const click = useClick(context)
 const dismiss = useDismiss(context)
 const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss])
 const { isMounted, styles } = useTransitionStyles(context)
 return (
  <>
   <div
    className={cn('py-0.5 pr-2 text-sm flex items-center bg-bg-secondary rounded-primary cursor-pointer hover:bg-var-editor-active w-full')}
    ref={refs.setReference}
    {...getReferenceProps()}>
    <div className='w-[30px] '>
     <CiCode className='m-auto text-fg-secondary text-base cursor-pointer hover:text-fg-primary' />
    </div>
    Language
   </div>
   {isMounted && (
    <div
     className={cn('flex flex-col px-1  py-1  items-start rounded-primary bg-bg-secondary border border-fg-secondary text-fg-secondary z-50')}
     {...getFloatingProps()}
     ref={refs.setFloating}
     style={{ ...styles, ...floatingStyles }}>
     {syntax.map((item) => (
      <SyntaxItem
       key={item.id}
       nid={nid as string}
       item={item}
       setIsOpen={setIsOpen}
      />
     ))}
    </div>
   )}
  </>
 )
}

export default SyntaxSelect
