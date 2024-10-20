'use client'
import React, { useState } from 'react'
import { useFloating, useClick, useDismiss, useRole, useInteractions, useId, FloatingOverlay, FloatingFocusManager } from '@floating-ui/react'

export default function MobileNav({ trigger }: { trigger: React.ReactNode }) {
 const [isOpen, setIsOpen] = useState(false)

 const { refs, context } = useFloating({
  open: isOpen,
  onOpenChange: setIsOpen,
 })

 const click = useClick(context)
 const dismiss = useDismiss(context, {
  outsidePressEvent: 'mousedown',
 })

 const role = useRole(context)

 const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role])

 const labelId = useId()
 const descriptionId = useId()

 return (
  <>
   <div
    ref={refs.setReference}
    {...getReferenceProps()}>
    {trigger}
   </div>
   {isOpen && (
    <FloatingOverlay
     lockScroll
     style={{ background: 'rgba(0,0,0,0.8' }}>
     <FloatingFocusManager context={context}>
      <div
       ref={refs.setFloating}
       aria-labelledby={labelId}
       aria-describedby={descriptionId}
       {...getFloatingProps()}>
       <h2 id={labelId}>Heading element</h2>
       <p id={descriptionId}>Description element</p>
       <button onClick={() => setIsOpen(false)}>Close</button>
      </div>
     </FloatingFocusManager>
    </FloatingOverlay>
   )}
  </>
 )
}
