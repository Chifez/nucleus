import React from 'react';
import PLchart from '@/components/PLchart';
import { CgOptions } from 'react-icons/cg';
import { FaUserFriends } from 'react-icons/fa';
import { MdNavigateNext } from 'react-icons/md';

const Plan = () => {
  return (
    <div className="w-full h-[60vh] mb-2 grid grid-cols-2 gap-2">
      <div className="bg-white rounded-md w-full px-3 py-1">
        <div className="flex items-center justify-between px-2 ">
          <span>
            <h1 className="text-xl font-semibold">P&L</h1>
            <p className="text-[#92959E] text-xs">Total profit growth of 30%</p>
          </span>
          <CgOptions className="w-5 h-5 text-[#D0D2DA]" />
        </div>
        <PLchart />
      </div>
      <div className="bg-white rounded-md w-full px-3 py-1">
        <div className="flex items-center justify-between px-2">
          <span>
            <h1 className="text-xl font-semibold">Current Plan</h1>
            <p className="text-[#92959E] text-xs">
              Information and usage of your current plan
            </p>
          </span>
          <CgOptions className="w-5 h-5 text-[#D0D2DA]" />
        </div>
        <div className="flex justify-between items-center">
          <span className={`w-full py-4 flex items-start justify-start gap-2`}>
            <div
              className={`w-14 h-14 flex items-center justify-center border border-transparent bg-[#EAF9FF] rounded-xl text-[#4ac7f8]`}
            >
              <FaUserFriends className="w-7 h-7" />
            </div>
            <div>
              <p className=" capitalize text-sm">Teams Plan</p>
              <p className="text-base font-semibold">$99/mo</p>
            </div>
          </span>
          <MdNavigateNext className="w-7 h-7" />
        </div>
        P & L
      </div>
    </div>
  );
};

export default Plan;
