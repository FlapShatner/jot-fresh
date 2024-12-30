import React from 'react';
import { login, validateRequest } from '@/actions/auth-actions';

import { LoginInput } from '@/lib/types';
import { redirect } from 'next/navigation';
import LoginForm from './login-form';

async function Login() {
  const { user, session } = await validateRequest();
  if (user) {
    return redirect('/editor/new');
  }
  async function loginUser(formData: FormData) {
    'use server';
    const username = formData.get('username')?.toString();
    const password = formData.get('password')?.toString();

    if (!username || !password) {
      alert('Please enter a username and password');
    }
    const loginData = { username: username, password: password } as LoginInput;
    const result = await login(loginData);
    if (result.error) {
      return result.error;
    }
    return;
  }

  async function guestUser(formData: FormData) {
    'use server';

    const loginData = {
      username: 'guest',
      password: 'password123',
    } as LoginInput;
    const result = await login(loginData);
    if (result.error) {
      return result.error;
    }
    return;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-4 ">
      <div className="flex flex-col items-center justify-center w-full h-[calc(100vh-200px)]">
        <div className="py-12 text-xl">Login</div>
        <LoginForm
          loginUser={loginUser}
          guestUser={guestUser}
        />
      </div>
    </div>
  );
}

export default Login;
