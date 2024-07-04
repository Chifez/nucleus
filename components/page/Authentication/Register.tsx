'use client';

import Button from '@/components/Shared/Button';
import UserInput from '@/components/Shared/UserInput';
import Link from 'next/link';
import React, { ChangeEvent, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { signup } from '@/lib/functions/auth';
import { BiAtom } from 'react-icons/bi';
import { useFormStatus } from 'react-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { fullname, email, password, confirmPassword } = formData;
  const { pending } = useFormStatus();

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value,
    }));
  };

  // const supabase = createClientComponentClient();

  // const handleSignUp = async () => {
  //   await supabase.auth.signUp({
  //     email,
  //     password,
  //     options: {
  //       emailRedirectTo: `${location.origin}/auth/login`,
  //     },
  //   });
  //   router.refresh();
  // };
  return (
    <div className="w-full h-screen  flex items-center justify-center bg-[#EAEAEA]">
      <div className="w-fit md:w-[32vw] min-h-[40vh] flex flex-col bg-white rounded-lg px-2 py-4">
        <div className="flex items-center justify-center text-lg py-3 text-[#551fff]">
          <BiAtom className="w-6 h-6" />
          <h1 className="text-lg font-semibold">Nucleus</h1>
        </div>
        <header className="w-full flex justify-center pb-4">
          <h1 className="font-semibold text-xl">Create new account</h1>
        </header>
        <form className="flex-1 px-4" action={() => signup(formData)}>
          <div className="flex flex-col gap-4 py-2">
            <UserInput
              label="Fullname"
              placeholder="Your Fullname"
              value={fullname}
              name="fullname"
              inputChange={onInputChange}
              className="rounded-lg w-full"
            />
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
              type="password"
              inputChange={onInputChange}
              className="rounded-lg w-full"
            />
            <UserInput
              label="Confirm Password"
              placeholder="Confirm your password"
              value={confirmPassword}
              name="confirmPassword"
              type="password"
              inputChange={onInputChange}
              className="rounded-lg w-full"
            />
          </div>
          <div>
            <div className="flex items-center justify-center w-full py-2">
              <Button type="submit" className="w-full">
                Create Account
              </Button>
            </div>

            <div className="text-center py-4">
              Already have an account?{' '}
              <Link href="/auth/login" className="underline">
                sign in
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
