import React from 'react'
import { cn } from '@/lib'

type Props = {
 children: React.ReactNode
 color: string
 bgColor?: string
}

function Button({ children, color, bgColor }: Props) {
 const bg = `bg-${bgColor}`
 const border = `border-${color}`
 const text = `text-${color}`

 return <div className={cn('mt-8 px-4 py-3 rounded-md  border-2  font-semibold', bg, border, text)}>{children}</div>
}

export default Button
