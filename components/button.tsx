import React from 'react'

type Props = {
 children: React.ReactNode
 variant: 'primary' | 'secondary'
 onClick?: () => void
}

const Button = ({ children, variant }: Props) => {
 if (variant === 'primary') {
  return (
   <button className='w-full bg-var-cyan rounded-md py-2 mt-4 text-bg-primary font-bold border-2 border-var-cyan hover:bg-var-cyan-light hover:border-var-cyan-light transition-all'>
    {children}
   </button>
  )
 } else if (variant === 'secondary') {
  return (
   <button className='w-full bg-var-cyan rounded-md py-2 mt-4 text-bg-primary font-bold border-2 border-var-cyan hover:bg-var-cyan-light hover:border-var-cyan-light transition-all'>
    {children}
   </button>
  )
 }
}

export default Button
