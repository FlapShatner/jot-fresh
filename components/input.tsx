import React from 'react'

type Props = {
 icon: React.ReactNode
 inputAttributes: React.InputHTMLAttributes<HTMLInputElement>
 labelAttributes: React.LabelHTMLAttributes<HTMLLabelElement>
 label: string
}

function Input({ icon, inputAttributes, labelAttributes, label }: Props) {
 return (
  <div className='flex flex-col group'>
   <label
    className='transition-transform pl-9 text-fg-primary'
    {...labelAttributes}>
    {label}
   </label>
   <div className='flex items-center relative '>
    <input
     autoComplete='false'
     className='text-fg-primary bg-bg-primary border border-var-cyan-trans py-1 px-2 text-lg rounded-md hover:bg-bg-secondary transition-all ph-show caret-transparent '
     {...inputAttributes}
    />
    {icon}
   </div>
  </div>
 )
}

export default Input
