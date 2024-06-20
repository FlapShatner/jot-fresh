import React from 'react'

type Props = {
 children: React.ReactNode
}

function Button({ children }: Props) {
 return <div className='mt-8 px-4 py-3 rounded-md bg-accent-primary'>{children}</div>
}

export default Button
