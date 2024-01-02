import Button from '@/components/Shared/Button';
import UserInput from '@/components/Shared/UserInput';
import Link from 'next/link';
import React, { ChangeEvent, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { fullname, email, password, confirmPassword } = formData;

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value,
    }));
  };

  return (
    <div className="w-full h-screen  flex items-center justify-center bg-[#EAEAEA]">
      <div className="w-[32vw] min-h-[85vh] flex flex-col bg-white rounded-lg py-4">
        <header className="w-full flex  justify-center pb-4">
          <h1 className="font-semibold text-2xl">Create New Account</h1>
        </header>
        <div className="flex-1 px-4">
          <div className="flex flex-col gap-4 py-2">
            <UserInput
              label="Fullname"
              placeholder="Your Fullname"
              value={fullname}
              name="email"
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
              <Button children="Create Account" />
            </div>
            <div className="text-center flex justify-center items-center my-1">
              <div className="w-full bg-black h-[1px] mx-1" />
              <p> OR</p>
              <div className="w-full bg-black h-[1px] mx-1" />
            </div>
            <div className="flex items-center gap-3">
              <Button className="!bg-transparent shadow-md text-black !text-sm mb-2">
                <div className="flex items-center justify-center gap-2">
                  <FcGoogle />
                  Sign up with Github
                </div>
              </Button>
              <Button className="!bg-transparent shadow-md text-black !text-sm mb-2">
                <div className="flex items-center justify-center gap-2">
                  <FcGoogle />
                  Sign up with Google
                </div>
              </Button>
            </div>

            <div className="text-center">
              Already have an account ?{' '}
              <Link href="/auth/login" className="underline">
                sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
