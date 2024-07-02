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
      disabled={isLoading || pending}
      onClick={handleClick}
      className={`bg-[#551FFF] text-white text-center text-xl font-semibold rounded-lg w-full p-2 ${className} cursor-pointer`}
    >
      {isLoading || pending ? <h1>Loading...</h1> : <div>{children}</div>}
    </button>
  );
};

export default Button;
