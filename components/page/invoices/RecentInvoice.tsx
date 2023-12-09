import React from 'react';
import { FaUserAlt } from 'react-icons/fa';

const RecentInvoice = () => {
  const Userslist = [
    {
      name: 'james Anderson',
      calls: 400,
    },
    {
      name: 'Vector sam',
      calls: 140,
    },
    {
      name: 'Nathan stone',
      calls: 100,
    },
    {
      name: 'Emma jeffery',
      calls: 44,
    },
    {
      name: 'Emma jeffery',
      calls: 240,
    },
    {
      name: 'Emma jeffery',
      calls: 80,
    },
    {
      name: 'Emma jeffery',
      calls: 150,
    },
  ];

  return (
    <div className="flex-1 h-full rounded-md">
      <section className="h-full bg-white dark:bg-[#0c0c0d] dark:text-white overflow-hidden rounded-md px-5 py-2">
        <h3 className="font-semibold">Recent Invoice</h3>
        <div className="flex mt-4">
          <div className="flex-1 text-sm font-semibold">
            <h1>User</h1>
          </div>
          <div className="text-sm font-semibold ">
            <h1>API Calls</h1>
          </div>
        </div>
        <div className="h-[48vh] w-full overflow-y-scroll scrollbar-hide">
          {Userslist.map((item, idx) => (
            <div
              key={idx}
              className="flex  items-start my-3 py-2 border-b border-[#ECECEE]"
            >
              <div className="flex-1 flex items-center gap-2 ">
                <div className="rounded-full w-fit h-fit p-1 flex items-center justify-center bg-[#9fade8]">
                  <FaUserAlt className="w-2 h-2" />
                </div>
                <h3 className="font-medium text-sm">{item.name}</h3>
              </div>
              <div className="">
                <p className="text-sm text-start ">{item.calls}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RecentInvoice;
