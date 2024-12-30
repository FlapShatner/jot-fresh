'use client'
import { Avatar, Email, Lock } from '@/app/icons';
import { Input, PwInput, Button } from '@/components';
import { useActionState } from 'react';

export default function SignupForm({ addUser }: { addUser: (formData: FormData) => void }) {
    const [error, formAction] = useActionState( 
        async (state: void | null, formData: FormData) => addUser(formData),
        null
      )
 return (
    <form
    action={formAction}
    autoComplete='off'
    className='flex flex-col items-center gap-2 justify-center font-sono transition-all'>
    <Input
     icon={<Avatar className='text-fg-primary text-2xl absolute left-2 -translate-y-9 transition-transform' />}
     inputAttributes={{ type: 'text', name: 'username', placeholder: ' ' }}
     label='Username'
     labelAttributes={{ htmlFor: 'username' }}
    />
    <Input
     icon={<Email className='text-fg-primary text-2xl absolute left-2 -translate-y-9 transition-transform' />}
     inputAttributes={{ type: 'email', name: 'email', placeholder: ' ' }}
     label='Email'
     labelAttributes={{ htmlFor: 'email' }}
    />
    <PwInput
     icon={<Lock className='text-fg-primary text-2xl absolute left-2 -translate-y-9 transition-transform' />}
     inputAttributes={{ name: 'password', placeholder: '' }}
     label='Password'
     labelAttributes={{ htmlFor: 'password' }}
    />
    <PwInput
     icon={<Lock className='text-fg-primary text-2xl absolute left-2 -translate-y-9 transition-transform' />}
     inputAttributes={{ name: 'confirmPassword', placeholder: '' }}
     label='Confirm Password'
     labelAttributes={{ htmlFor: 'confirmPassword' }}
    />
    <Button variant='primary'>Sign Up</Button>
   </form>
 )
}
