'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';
import { headers } from 'next/headers';

export async function login(formData: any) {
  const supabase = createClient();

  const data = {
    email: formData.email,
    password: formData.password,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
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
      redirectTo: `${origin}/api/auth/callback`,
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
      redirectTo: `${origin}/api/auth/callback`,
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
