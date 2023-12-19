import React from 'react';
import { AiOutlinePieChart, AiTwotonePieChart } from 'react-icons/ai';
import { BiTransfer } from 'react-icons/bi';
import { FaFileInvoice, FaUserAlt } from 'react-icons/fa';

const Overview = () => {
  const lists = [
    {
      icon: <FaFileInvoice className="w-5 h-5 text-[#fa954e]" />,
      title: 'projects',
      value: '3',
      bg: 'bg-[#FFF2E9]',
    },
    {
      icon: <BiTransfer className="w-5 h-5 text-[#734cff]" />,
      title: 'request',
      value: '3456',
      bg: 'bg-[#EDE8FF]',
    },
    {
      icon: <FaUserAlt className="w-5 h-5 text-[#4ac7f8]" />,
      title: 'users',
      value: '3',
      bg: 'bg-[#EAF9FF]',
    },
    {
      icon: <AiTwotonePieChart className="w-5 h-5 text-[#f58e45]" />,
      title: 'storage',
      value: '128/500GB',
      bg: 'bg-[#FFF2E9]',
    },
  ];
  return (
    <div className="p-2 md:p-5 bg-white dark:bg-[#0c0c0d] dark:text-white transition-all duration-600 rounded-md w-full lg:h-[20vh] grid grid-cols-2 lg:flex items-center justify-around gap-1">
      {lists.map((item, idx) => (
        <span
          key={idx}
          className={`${
            idx != 3 ? 'lg:border-r md:pl-1' : 'md:pl-1'
          } border-[#ECECEE] w-full py-2 px-1 flex items-start justify-start gap-2`}
        >
          <div
            className={`w-10 h-10 md:w-14 md:h-14  flex items-center justify-center border border-transparent rounded-xl ${item.bg} text-[${item.bg}]`}
          >
            {item.icon}
          </div>
          <div>
            <p className="text-sm md:text-base font-semibold capitalize text-[#92959E]">
              {item.title}
            </p>
            <p className="text-sm md:text-base font-medium">{item.value}</p>
          </div>
        </span>
      ))}
    </div>
  );
};

export default Overview;
