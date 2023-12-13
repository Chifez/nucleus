import Modal from '@/components/Modal';
import React, { useState } from 'react';
import { CgOptions } from 'react-icons/cg';
import PLchart from './PLchart';
import DropDown from '@/components/DropDown';

const Profit = () => {
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

  return (
    <div className="bg-white dark:bg-[#0c0c0d] dark:text-white transition-all duration-600 rounded-md w-full px-3 py-1">
      <div className="flex items-center justify-between px-2 ">
        <span>
          <h1 className="text-xl font-semibold">P&L</h1>
          <p className="text-[#92959E] text-xs">Total profit growth of 30%</p>
        </span>
        <div className="relative">
          <CgOptions
            className=" w-5 h-5 text-[#D0D2DA] cursor-pointer"
            onClick={handleOpenOption}
          />
          <Modal
            isDropDown={true}
            openModal={isOptionOpen}
            onClose={handlecloseOption}
            extrastyle="absolute right-1 rounded-md z-50"
          >
            <DropDown list={optionlist} />
          </Modal>
        </div>
      </div>
      <PLchart />
    </div>
  );
};

export default Profit;
