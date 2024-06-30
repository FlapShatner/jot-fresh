'use client'
import { Tooltip } from 'react-tooltip'
import React from 'react'

function TooltipWrap({ children, tooltip }: { children: React.ReactNode; tooltip: { id: string; content: string } }) {
 return (
  <div>
   <a id={tooltip.id}>{children}</a>
   <Tooltip
    anchorSelect={`#${tooltip.id}`}
    place='bottom'
    variant='dark'
    content={tooltip.content}
   />
  </div>
 )
}

export default TooltipWrap
