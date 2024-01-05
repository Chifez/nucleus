import Button from '@/components/Shared/Button';
import UserInput from '@/components/Shared/UserInput';
import Link from 'next/link';
import React, { ChangeEvent, useState } from 'react';
import { BiAtom } from 'react-icons/bi';
import { FcGoogle } from 'react-icons/fc';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import {
  handleSignIn,
  handleSignInWithGithub,
  handleSignInWithGoogle,
} from '@/lib/functions/auth';
import useUserState from '@/store/user';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;
  const router = useRouter();
  const { user, setUser } = useUserState();

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value,
    }));
  };
  const supabaseUrl = process.env.NEXT_PUBLIC_PROJECT_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_ANON_KEY;
  const supabase = createClientComponentClient({ supabaseUrl, supabaseKey });

  return (
    <div className="w-full h-screen py-8 flex items-center justify-center bg-[#EAEAEA]">
      <div className="w-[32vw] min-h-[40vh] flex flex-col bg-white rounded-lg py-2 ">
        <div className="flex items-center justify-center text-lg py-3 text-[#551fff]">
          <BiAtom className="w-6 h-6" />
          <h1 className="text-lg font-semibold">Nucleus</h1>
        </div>
        <header className="w-full flex justify-center pb-4">
          <h1 className="font-semibold text-xl">Login into your account</h1>
        </header>
        <div className="flex-1 px-4">
          <div className="flex flex-col gap-4 py-2">
            <UserInput
              label="Email"
              placeholder="Your Email"
              value={email}
              name="email"
              inputChange={onInputChange}
              className="rounded-lg w-full"
            />
            <UserInput
              label="Password"
              placeholder="Your Password"
              value={password}
              name="password"
              inputChange={onInputChange}
              type="password"
              className=" rounded-lg w-full"
            />
          </div>
          <Link href="#" className="underline">
            forget password?
          </Link>
          <div className="my-2">
            <div
              className="flex items-center justify-center w-full py-2"
              onClick={() => handleSignIn(email, password, router)}
            >
              <Button children="Login" />
            </div>
            <div className="text-center flex justify-center items-center my-1">
              <div className="w-full bg-black h-[1px] mx-1" />
              <p> OR</p>
              <div className="w-full bg-black h-[1px] mx-1" />
            </div>
            <div className="flex items-center gap-3">
              <Button
                className="!bg-transparent shadow-md text-black !text-sm mb-2"
                handleClick={handleSignInWithGithub}
              >
                <div className="flex items-center justify-center gap-2">
                  <FcGoogle />
                  Sign in with Github
                </div>
              </Button>
              <Button
                className="!bg-transparent shadow-md text-black !text-sm mb-2"
                handleClick={() => handleSignInWithGoogle(setUser)}
              >
                <div className="flex items-center justify-center gap-2">
                  <FcGoogle />
                  Sign in with Google
                </div>
              </Button>
            </div>

            <div className="text-center">
              don't have an account ?{' '}
              <Link href="/auth/register" className="underline">
                sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
