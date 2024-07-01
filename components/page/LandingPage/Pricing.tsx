'use client';

import PricingCard from '@/components/Shared/PricingCard';
import { pricingList } from '@/lib/utils/data/pricing';
import { useState } from 'react';

const Pricing = () => {
  const [plan, setPlan] = useState('Monthly');

  return (
    <section
      id="pricing"
      className="flex flex-col items-center space-y-10 py-4 px-5 lg:px-20 bg-gradient-to-l from-gray-200 to-slate-50 via-slate-300"
    >
      <div className="text-center">
        <h1 className="text-3xl font-[500] mb-2">Choose your right plan</h1>
        <p className="text-sm font-normal text-zinc-500">
          Select from a variety of plans that suits your need
        </p>
      </div>
      <div className="flex cursor-pointer flex-row bg-white rounded-full p-1 w-[90%] md:w-[40%]">
        <span
          className={`w-full text-xs  text-center p-2 ${
            plan === 'Monthly'
              ? 'rounded-full bg-purple-500 text-white '
              : 'text-zinc-500 font-medium'
          }`}
          onClick={() => setPlan('Monthly')}
        >
          Monthly
        </span>
        <span
          className={`w-full text-xs text-center p-2 ${
            plan === 'Yearly'
              ? 'rounded-full bg-purple-500 text-white  '
              : 'text-zinc-500 font-medium'
          }`}
          onClick={() => setPlan('Yearly')}
        >
          Yearly (save 10%)
        </span>
      </div>
      <div className="flex flex-col md:flex-row gap-6 px-4 lg:px-20">
        {pricingList.map((item, idx) => (
          <PricingCard list={item} plan={plan} key={idx} />
        ))}
      </div>
    </section>
  );
};
export default Pricing;
