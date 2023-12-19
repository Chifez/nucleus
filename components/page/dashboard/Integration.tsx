import DropDown from '@/components/DropDown';
import Modal from '@/components/Modal';
import React, { useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { SlOptionsVertical } from 'react-icons/sl';

const Integration = () => {
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

  const IntegrationList = [
    {
      name: 'anderson john',
      desc: 'integrating the usersproductApi',
    },
    {
      name: 'Vector sam',
      desc: 'integrating the usersAuthApi',
    },
    {
      name: 'Emma jeffery',
      desc: 'integrating the userscartApi',
    },
    {
      name: 'anderson john',
      desc: 'integrating the userscheckoutApi',
    },
    {
      name: 'anderson john',
      desc: 'integrating the userscheckoutApi',
    },
    {
      name: 'Nathan stone',
      desc: 'integrating the userscheckoutApi',
    },
  ];
  return (
    <section className="flex-1 bg-white dark:bg-[#0c0c0d] dark:text-white transition-all duration-600 overflow-hidden rounded-md py-2 ">
      <div className="w-full h-[3vh]  flex items-center justify-between shadow-sm px-5 py-4">
        <h3 className="font-semibold">Integration List</h3>
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
      <div className="h-[60vh] overflow-y-scroll scrollbar-hide px-5">
        {IntegrationList.map((item, idx) => (
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

export default Integration;
