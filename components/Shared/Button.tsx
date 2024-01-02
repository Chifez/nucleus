import React, { ReactNode } from 'react';

const Button = ({
  children,
  className,
  isLoading,
}: {
  children: string | ReactNode;
  className?: string;
  isLoading?: boolean;
}) => {
  return (
    <div
      role="button"
      className={`bg-[#551FFF] text-white text-center text-xl font-semibold rounded-lg w-full  p-2 ${className} cursor-pointer`}
    >
      {isLoading ? <h1>Loading ...</h1> : <div>{children}</div>}
    </div>
  );
};

export default Button;
