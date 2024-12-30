'use client'
import { useActionState } from 'react';
import Link from 'next/link';
import { Avatar, Lock } from '@/app/icons';
import { Button, Input, PwInput } from '@/components';


export default function LoginForm({ loginUser, guestUser }: { loginUser: (formData: FormData) => void, guestUser: (formData: FormData) => void }) {

    const [error, formAction] = useActionState(
      async (state: void | null, formData: FormData) => loginUser(formData),
      null
    )
  return (
    <>
    {error ? <div className="text-red-500">{error}</div> : null}
      <form
        action={formAction}
        autoComplete="off"
        className="flex flex-col items-center gap-2 justify-center font-sono transition-all"
      >
        <Input
          icon={
            <Avatar className="text-fg-primary text-2xl absolute left-2 -translate-y-9 transition-transform" />
          }
          inputAttributes={{
            type: 'text',
            name: 'username',
            placeholder: ' ',
            required: true,
          }}
          label="Email or username"
          labelAttributes={{ htmlFor: 'username' }}
        />
        <div className="w-full flex flex-col gap-2">
          <PwInput
            icon={
              <Lock className="text-fg-primary text-2xl absolute left-2 -translate-y-9 transition-transform" />
            }
            inputAttributes={{
              name: 'password',
              placeholder: '',
              required: true,
            }}
            label="Password"
            labelAttributes={{ htmlFor: 'password' }}
          />
          <Link
            className="text-xs m-auto text-center text-accent hover:text-fg-primary underline"
            href="/reset"
          >
            Forgot password?
          </Link>
        </div>
        <Button variant="primary">Sign In</Button>
      </form>
      <button className="w-max bg-accent rounded-md py-0.5 px-[30px] mt-4 text-bg-primary font-bold border border-accent hover:bg-accent-light hover:border-accent-light transition-all">
        <Link href="/signup">Create an account</Link>
      </button>
      <form action={guestUser}>
        <button className="underline text-accent mt-4 text-sm hover:text-accent-light cursor-pointer">
          Or try as guest
        </button>
      </form>
    </>
  );
}
