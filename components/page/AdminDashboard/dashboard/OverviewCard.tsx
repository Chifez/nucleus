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
  data?: string[];
}) => {
  const list = new Array(2).fill(2);
  return (
    <div className=" p-3 w-full h-full">
      <h1 className="text-lg font-semibold">User</h1>
      <div className="flex flex-col gap-2 py-2">
        {list.map((item, idx) => (
          <li className="flex items-center gap-2 list-none">
            <div className="flex items-center gap-2">
              <div className="rounded-full w-fit h-fit p-1 flex items-center bg-[#9fade8]">
                <FaUserAlt className="w-2 h-2" />
              </div>
              <div className="text-base font-medium">James Anderson</div>
            </div>
            <Chip
              value="Basic"
              style="bg-green-400 rounded-full text-xs font-semibold"
            />
          </li>
        ))}
      </div>
    </div>
  );
};

export default OverviewCard;
