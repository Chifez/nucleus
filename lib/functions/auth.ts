'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';
import { headers } from 'next/headers';

const getURL = () => {
  const isDevelopment = process.env.NODE_ENV === 'development';

  let url = isDevelopment
    ? 'http://localhost:3000/'
    : process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
      process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
      'http://localhost:3000/'; // Fallback

  // Ensure the URL starts with http(s) and ends with a trailing slash
  url = url.startsWith('http') ? url : `https://${url}`;
  url = url.endsWith('/') ? url : `${url}/`;

  console.log('this is the url', url);
  return url;
};

export async function login(formData: any) {
  const supabase = createClient();

  const data = {
    email: formData.email,
    password: formData.password,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.log('login error', error);
    redirect('/error');
  }

  // revalidatePath('/', 'layout')
  redirect('/dashboard');
}

export async function signup(formData: any) {
  const supabase = createClient();

  const data = {
    email: formData.email,
    password: formData.password,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    console.log('register error', error);
    redirect('/error');
  }

  // revalidatePath('/', 'layout')
  redirect('/dashboard');
}

export const handleSignInWithGithub = async () => {
  'use server';

  const supabase = createClient();
  const origin = headers().get('origin');
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: `${getURL()}/api/auth/callback`,
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
    },
  });
  if (data.url) {
    redirect(data.url);
  }
};

export const handleSignInWithGoogle = async () => {
  'use server';

  const supabase = createClient();

  const origin = headers().get('origin');

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${getURL()}/api/auth/callback`,
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
    },
  });
  if (data.url) {
    redirect(data.url);
  }
};

export const handleLogout = async () => {
  'use server';

  const supabase = createClient();

  const { error } = await supabase.auth.signOut();
  if (error) {
    console.log(error);
  }
  redirect('/auth/login');
};
