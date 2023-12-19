import Calendar from '@/components/Calendar';
import Modal from '@/components/Modal';
import useCalendar from '@/hooks/useCalendar';
import { format, parse, startOfToday } from 'date-fns';
import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { IoFilter } from 'react-icons/io5';
import { RiArrowDropDownLine } from 'react-icons/ri';

const Filter = () => {
  const [openCalendarModal, setOpenCalendarModal] = useState(false);
  const { firstDayOfMonth } = useCalendar();
  const Month = firstDayOfMonth;

  const handleToggleCalendar = () => {
    setOpenCalendarModal(!openCalendarModal);
  };
  const handlecloseOption = () => {
    setOpenCalendarModal(false);
  };
  return (
    <div className="flex items-center gap-2">
      <button className="bg-white dark:bg-[#0c0c0d] dark:text-white rounded-full w-10 h-10 p-1 flex items-center justify-center">
        <IoFilter />
      </button>

      <div
        onClick={handleToggleCalendar}
        className="flex items-center gap-2 bg-white dark:bg-[#0c0c0d] dark:text-white w-42 h-10 rounded-full px-3 cursor-pointer"
      >
        <div className="flex items-center gap-2 dark:text-white">
          <FaCalendarAlt />
          <p className="text-sm"> {format(Month, 'MMMM yyyy')} </p>
        </div>
        <RiArrowDropDownLine />
        <Modal
          isDropDown={true}
          openModal={openCalendarModal}
          onClose={handlecloseOption}
          extrastyle="absolute lg:right-[320px] top-32 rounded-md z-50 p-2"
        >
          <Calendar />
        </Modal>
      </div>
    </div>
  );
};

export default Filter;
