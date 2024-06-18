import React from 'react';

const Feature = () => {
  return (
    <section id="feature" className="h-full w-full px-4 lg:px-20 py-20">
      <div className="my-4">
        <h1 className="font-bold text-5xl">What you get</h1>
      </div>

      <div className="grid grid-flow-col gap-4">
        <span className="border border-red-500 w-full h-96 rounded-md">
          {' '}
          card 1
        </span>
        <span className="border border-red-500 w-full h-96 rounded-md">
          {' '}
          card 1
        </span>
        <span className="border border-red-500 w-full h-96 rounded-md">
          {' '}
          card 1
        </span>
      </div>
    </section>
  );
};

export default Feature;
