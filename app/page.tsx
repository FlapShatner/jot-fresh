import Button from '../components/button'

export default function Home() {
 return (
  <main className='flex min-h-screen flex-col items-center justify-center p-4'>
   <h1 className='text-5xl font-bold font-caveat'>Jot</h1>
   <p className='font-dmSans'>A simple note taking app</p>
   <Button>This Is A Test Button</Button>
  </main>
 )
}
