'use client'
import React, { useState } from 'react'
import { EyeClosed, EyeOpen } from '@/app/icons'

type Props = {
 icon: React.ReactNode
 inputAttributes: React.InputHTMLAttributes<HTMLInputElement>
 labelAttributes: React.LabelHTMLAttributes<HTMLLabelElement>
 label: string
}

function PwInput({ icon, inputAttributes, labelAttributes, label }: Props) {
 const [showPassword, setShowPassword] = useState(false)
 const togglePasswordVisibility = () => {
  setShowPassword(!showPassword)
 }
 return (
  <div className='flex flex-col group input-wrap '>
   <label
    className='group-hover:translate-x-9 transition-transform text-fg-primary'
    {...labelAttributes}>
    {label}
   </label>
   <div className='flex items-center relative'>
    <div className='flex items-center relative '>
     <input
      className='text-fg-primary bg-bg-primary border border-var-cyan-trans py-1 px-2 text-lg rounded-md hover:bg-bg-secondary transition-all ph-show caret-transparent '
      type={showPassword ? 'text' : 'password'}
      {...inputAttributes}
     />
     {icon}
    </div>
    <div
     onClick={togglePasswordVisibility}
     className='flex items-center relative '>
     {!showPassword ? (
      <EyeOpen className='text-fg-primary text-2xl absolute right-2 cursor-pointer' />
     ) : (
      <EyeClosed className='text-fg-primary text-2xl absolute right-2 cursor-pointer' />
     )}
    </div>
   </div>
  </div>
 )
}

export default PwInput
