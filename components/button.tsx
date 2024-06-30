import React from 'react'

type Props = {
 children: React.ReactNode
 variant: 'primary' | 'secondary'
 onClick?: () => void
}

const Button = ({ children, variant }: Props) => {
 if (variant === 'primary') {
  return (
   <button className='w-full bg-accent rounded-md py-2 mt-4 text-bg-primary font-bold border border-accent hover:bg-accent-light hover:border-accent-light transition-all'>
    {children}
   </button>
  )
 } else if (variant === 'secondary') {
  return (
   <button className='w-full bg-accent rounded-md py-2 mt-4 text-bg-primary font-bold border border-accent hover:bg-accent-light hover:border-accent-light transition-all'>
    {children}
   </button>
  )
 }
}

export default Button
