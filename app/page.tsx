import { Header } from '@/components'
import { validateRequest } from '@/actions/auth-actions'
import { redirect } from 'next/navigation'

export default async function Home() {
 const { user, session } = await validateRequest()

 return (
  <main className='flex min-h-screen flex-col items-center justify-center p-4'>
   <Header user={user ? user : null} />
   <h1 className='text-5xl font-bold font-caveat'>Jot</h1>
   <p className='font-dmSans'>A simple note taking app</p>
  </main>
 )
}
