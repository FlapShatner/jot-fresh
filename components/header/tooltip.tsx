'use client'
import { Tooltip } from 'react-tooltip'
import React from 'react'

type PlaceType =
 | 'left'
 | 'right'
 | 'top'
 | 'bottom'
 | 'top-start'
 | 'top-end'
 | 'right-start'
 | 'right-end'
 | 'bottom-start'
 | 'bottom-end'
 | 'left-start'
 | 'left-end'

function TooltipWrap({ children, tooltip, place = 'left' }: { children: React.ReactNode; tooltip: { id: string; content: string }; place?: PlaceType }) {
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
    style={{ backgroundColor: 'var(--tooltip-bg)', padding: '2px 6px', fontSize: '12px' }}
    variant='dark'
    content={tooltip.content}
   />
  </div>
 )
}

export default TooltipWrap
