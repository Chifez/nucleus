import DropDown from '@/components/DropDown';
import Modal from '@/components/Modal';
import React, { useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { SlOptionsVertical } from 'react-icons/sl';

const Activity = () => {
  const [isOptionOpen, setIsOptionOpen] = useState(false);

  const handleOpenOption = () => {
    setIsOptionOpen(!isOptionOpen);
  };

  const handlecloseOption = () => {
    setIsOptionOpen(false);
  };
  const optionlist = {
    optionList: ['option 1', 'option 2'],
  };

  const Userslist = [
    {
      name: 'james Anderson',
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis a id excepturi eum ut possimus quos in mollitia ratione! Aliquam',
    },
    {
      name: 'Vector sam',
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis a id excepturi eum ut possimus quos in mollitia ratione! Aliquam',
    },
    {
      name: 'Nathan stone',
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis a id excepturi eum ut possimus quos in mollitia ratione! Aliquam',
    },
    {
      name: 'Emma jeffery',
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis a id excepturi eum ut possimus quos in mollitia ratione! Aliquam',
    },
    {
      name: 'Emma jeffery',
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis a id excepturi eum ut possimus quos in mollitia ratione! Aliquam',
    },
    {
      name: 'Emma jeffery',
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis a id excepturi eum ut possimus quos in mollitia ratione! Aliquam',
    },
    {
      name: 'Emma jeffery',
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis a id excepturi eum ut possimus quos in mollitia ratione! Aliquam',
    },
  ];

  return (
    <section className="mb-3 h-[75vh]  bg-white dark:bg-[#0c0c0d] dark:text-white transition-all duration-600 overflow-hidden rounded-md py-2 ">
      <div className="w-full h-[3vh]  flex items-center justify-between shadow-sm px-5 py-4">
        <h3 className="font-semibold">Activity</h3>
        <div className="relative">
          <SlOptionsVertical
            onClick={handleOpenOption}
            className="cursor-pointer"
          />
          <Modal
            isDropDown={true}
            openModal={isOptionOpen}
            onClose={handlecloseOption}
            extrastyle="absolute right-1 rounded-md z-50"
          >
            <DropDown list={optionlist} handleClick={handlecloseOption} />
          </Modal>
        </div>
      </div>
      <div className="h-[65vh] w-full overflow-y-scroll scrollbar-hide px-5">
        {Userslist.map((item, idx) => (
          <div
            key={idx}
            className="flex gap-2 my-3 py-4 border-b border-[#ECECEE]"
          >
            <div className="rounded-full w-fit h-fit p-2 flex items-center bg-[#9fade8]">
              <FaUserAlt className="w-3 h-3" />
            </div>
            <span className="space-y-2">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-xs">{item.desc}</p>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activity;
