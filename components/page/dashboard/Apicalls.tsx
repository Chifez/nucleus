import DropDown from '@/components/DropDown';
import Modal from '@/components/Modal';
import Chart from '@/components/page/dashboard/Apichart';
import { useState } from 'react';
import { CgOptions } from 'react-icons/cg';
const Apicalls = () => {
  const [isOptionOpen, setIsOptionOpen] = useState(false);

  const optionlist = {
    optionList: ['option 1', 'option 2'],
  };

  const handleOpenOption = () => {
    setIsOptionOpen(!isOptionOpen);
  };

  const handlecloseOption = () => {
    setIsOptionOpen(false);
  };
  return (
    <div className="bg-white dark:bg-[#0c0c0d] dark:text-white transition-all duration-600 rounded-md w-full h-[70vh] p-4">
      <div className="flex items-center justify-between px-5 mb-10">
        <div className="text-xl font-semibold ">
          API Calls in the last 6 hours
        </div>
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
            <DropDown list={optionlist} handleClick={handlecloseOption} />
          </Modal>
        </div>
      </div>
      <div className="h-[55vh]">
        <Chart />
      </div>
    </div>
  );
};

export default Apicalls;
