import { useState } from 'react'
import {
 useFloating,
 autoUpdate,
 offset,
 flip,
 shift,
 useHover,
 useFocus,
 useDismiss,
 useRole,
 useInteractions,
 FloatingPortal,
 useTransitionStyles,
} from '@floating-ui/react'

function Tooltip({ label, children }: { label: string; children: React.ReactNode }) {
 const [open, setOpen] = useState(false)
 const { refs, floatingStyles, context } = useFloating({
  open: open,
  onOpenChange: setOpen,
  placement: 'top',
  // Make sure the tooltip stays on the screen
  whileElementsMounted: autoUpdate,
  middleware: [
   offset(5),
   flip({
    fallbackAxisSideDirection: 'start',
   }),
   shift(),
  ],
 })
 const { isMounted, styles } = useTransitionStyles(context, {
  initial: {
   opacity: 0,
  },
 })
 // Event listeners to change the open state
 const hover = useHover(context, { move: false, delay: { open: 200, close: 0 } })
 const focus = useFocus(context)
 const dismiss = useDismiss(context)
 // Role props for screen readers
 const role = useRole(context, { role: 'tooltip' })

 // Merge all the interactions into prop getters
 const { getReferenceProps, getFloatingProps } = useInteractions([hover, focus, dismiss, role])
 return (
  <>
   <button
    ref={refs.setReference}
    {...getReferenceProps()}>
    {children}
   </button>
   <FloatingPortal>
    {isMounted && (
     <div
      className='w-max max-w-[90vw] bg-bg-primary rounded-primary py-1 px-2 text-sm text-fg-primary z-40 border border-txt-secondary'
      ref={refs.setFloating}
      style={{ ...styles, ...floatingStyles }}
      {...getFloatingProps()}>
      {label}
     </div>
    )}
   </FloatingPortal>
  </>
 )
}

export default Tooltip
