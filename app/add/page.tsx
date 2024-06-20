import React from 'react'
import { userData } from '@/dl/queries'

function Add() {
 async function addUser(formData: FormData) {
  'use server'
  const name = formData.get('name')?.toString()
  const email = formData.get('email')?.toString()
  if (!name || !email) return

  const result = await userData.insertUser({ name, email })
  console.log(result)
 }

 return (
  <div className='flex min-h-screen flex-col items-center justify-center p-4'>
   <form
    action={addUser}
    className='flex flex-col items-center gap-4 justify-center'>
    <input
     type='text'
     placeholder='Name'
     name='name'
    />
    <input
     type='text'
     placeholder='Email'
     name='email'
    />
    <button>Add</button>
   </form>
  </div>
 )
}

export default Add
