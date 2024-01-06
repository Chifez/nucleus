import Chip from '@/components/Shared/Chip';
import React from 'react';
import { FaUserAlt } from 'react-icons/fa';

const OverviewCard = ({
  title,
  type,
  data,
}: {
  title?: string;
  type?: string;
  data?: { user: string; value: number | string }[];
}) => {
  return (
    <div className="p-3 w-full h-full">
      <h1 className="text-lg font-semibold">{title}</h1>
      <div className="flex flex-col gap-2  py-2">
        {data?.map((item, idx) => (
          <li
            className="w-[50%] flex items-center justify-between list-none"
            key={idx}
          >
            <div className="flex items-center gap-2">
              <div className="rounded-full w-fit h-fit p-1 flex items-center bg-[#9fade8]">
                <FaUserAlt className="w-2 h-2" />
              </div>
              <div className="text-base font-medium">{item.user}</div>
            </div>
            <Chip
              value={item.value}
              style="bg-green-400 rounded-full text-xs font-semibold"
            />
          </li>
        ))}
      </div>
    </div>
  );
};

export default OverviewCard;
