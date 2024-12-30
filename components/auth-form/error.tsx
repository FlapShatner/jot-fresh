'use client'
export default function Error({ error }: { error: string }) {
 return (
  <div className='text-red-500'>{error}</div>
 )
}