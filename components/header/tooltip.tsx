'use client'
import { Tooltip } from 'react-tooltip'
import React from 'react'

function TooltipWrap({ children, tooltip, place = 'left' }: { children: React.ReactNode; tooltip: { id: string; content: string }; place?: 'left' | 'right' }) {
 return (
  <div>
   <div
    className='flex '
    id={tooltip.id}>
    {children}
   </div>
   <Tooltip
    anchorSelect={`#${tooltip.id}`}
    noArrow
    delayShow={200}
    place={place}
    style={{ backgroundColor: 'var(--tooltip-bg)', padding: '4px 8px' }}
    variant='dark'
    content={tooltip.content}
   />
  </div>
 )
}

export default TooltipWrap
