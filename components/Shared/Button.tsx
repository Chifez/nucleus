'use client';

import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { useFormStatus } from 'react-dom';

const Button = ({
  type,
  children,
  className,
  isLoading,
  handleClick,
}: {
  type?: any | string;
  children: string | ReactNode;
  className?: string;
  isLoading?: boolean;
  handleClick?: () => void;
}) => {
  const { pending } = useFormStatus();
  return (
    <button
      type={type ? type : 'button'}
      onClick={handleClick}
      className={`bg-[#551FFF] text-white text-center text-base font-semibold rounded-lg p-2 cursor-pointer ${
        isLoading || pending ? 'cursor-not-allowed' : ''
      } ${className}`}
      style={{
        pointerEvents: isLoading || pending ? 'none' : 'auto',
        opacity: isLoading || pending ? 0.7 : 1,
      }}
    >
      {isLoading || pending ? <h1>Loading...</h1> : <div>{children}</div>}
    </button>
  );
};

export default Button;
