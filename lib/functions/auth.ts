import useUserState from '@/store/user';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const supabase = createClientComponentClient();
// const { user, setUser } = useUserState();

export const handleSignIn = async (
  email: string,
  password: string,
  router: any
) => {
  await supabase.auth.signInWithPassword({
    email,
    password,
  });
  router.refresh();
};

export const handleSignUp = async (
  email: string,
  password: string,
  router: any
) => {
  await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${location.origin}/auth/login`,
    },
  });

  router.refresh();
};

export const handleSignInWithGithub = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: `${location.origin}/dashboard`,
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
    },
  });
};

export const handleSignInWithGoogle = async (
  setUser: (arg0: string) => void
) => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${location.origin}/dashboard`,
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
    },
  });
  setUser(data as unknown as string);
};
