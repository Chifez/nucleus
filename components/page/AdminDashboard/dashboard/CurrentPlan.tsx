'use client';

import React, { useState } from 'react';
import { CgOptions } from 'react-icons/cg';
import { FaUserAlt, FaUserFriends, FaUsers } from 'react-icons/fa';
import { MdNavigateNext } from 'react-icons/md';
import CurrentPlanCard from './CurrentPlanCard';
import Carousel from '@/components/Shared/Carousel';
import Modal from '@/components/Shared/Modal';
import DropDown from '@/components/Shared/DropDown';

const CurrentPlan = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const lists = [
    {
      icon: <FaUserAlt className="w-5 h-5 text-[#4ac7f8]" />,
      title: 'Basic',
      value: '$50/mo',
      bg: 'bg-[#EAF9FF]',
      fill: 'bg-[#4ac7f8]',
      data: [
        {
          title: 'projects',
          value: '1/4',
          bg: 'bg-[#EDE8FF]',
          fill: 'bg-[#734cff]',
          width: 'w-[25%]',
        },
        {
          title: 'users',
          value: '1/7',
          bg: 'bg-[#FFF2E9]',
          fill: 'bg-[#fa954e]',
          width: 'w-[17%]',
        },
        {
          title: 'Request/day',
          value: '2.5k/10k',
          bg: 'bg-[#EAF9FF]',
          fill: 'bg-[#4ac7f8]',
          width: 'w-[25%]',
        },
      ],
    },
    {
      icon: <FaUserFriends className="w-5 h-5 text-[#fa954e]" />,
      title: 'Teams',
      value: '$99/mo',
      bg: 'bg-[#FFF2E9]',
      fill: 'bg-[#fa954e]',
      data: [
        {
          title: 'projects',
          value: '1/5',
          bg: 'bg-[#EDE8FF]',
          fill: 'bg-[#734cff]',
          width: 'w-[20%]',
        },
        {
          title: 'users',
          value: '1/3',
          bg: 'bg-[#FFF2E9]',
          fill: 'bg-[#fa954e]',
          width: 'w-[35%]',
        },
        {
          title: 'Request/day',
          value: '3.5k/10k',
          bg: 'bg-[#EAF9FF]',
          fill: 'bg-[#4ac7f8]',
          width: 'w-[30%]',
        },
      ],
    },
    {
      icon: <FaUsers className="w-5 h-5 text-[#734cff]" />,
      title: 'Enterprise',
      value: '$120/mo',
      bg: 'bg-[#EDE8FF]',
      fill: 'bg-[#734cff]',
      data: [
        {
          title: 'projects',
          value: '1/7',
          bg: 'bg-[#EDE8FF]',
          fill: 'bg-[#734cff]',
          width: 'w-[17%]',
        },
        {
          title: 'users',
          value: '2/8',
          bg: 'bg-[#FFF2E9]',
          fill: 'bg-[#fa954e]',
          width: 'w-[25%]',
        },
        {
          title: 'Request/day',
          value: '5.5k/10k',
          bg: 'bg-[#EAF9FF]',
          fill: 'bg-[#4ac7f8]',
          width: 'w-[60%]',
        },
      ],
    },
  ];

  const goToNextSlide = () => {
    console.log('clicked', currentIndex);
    if (currentIndex == lists.length - 1) {
      return setCurrentIndex(0);
    }
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div className="bg-white dark:bg-[#0c0c0d] dark:text-white rounded-md w-full px-3 py-1 ">
      <div className="flex items-center justify-between px-2">
        <span>
          <h1 className="text-xl font-semibold">Current Plan</h1>
          <p className="text-[#92959E] text-xs">
            Information and usage of your current plan
          </p>
        </span>
        <div className="relative">
          <CgOptions
            className="w-5 h-5 text-[#D0D2DA] cursor-pointer"
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
      <div className="flex justify-between items-center">
        <Carousel currentIndex={currentIndex}>
          {lists.map((item, index) => (
            <CurrentPlanCard item={item} key={index} />
          ))}
        </Carousel>
        <button onClick={goToNextSlide}>
          <MdNavigateNext className="w-7 h-7" />
        </button>
      </div>
      <Carousel currentIndex={currentIndex}>
        {lists.map((item, index) => (
          <div key={index} className="flex flex-col gap-5 min-w-full  py-2">
            {item.data.map((data, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="flex justify-between font-medium text-sm">
                  <p className="capitalize">{data.title}</p>
                  <p>{data.value}</p>
                </div>
                <div
                  className={`relative flex items-center w-full h-[6px] ${data.bg} rounded-sm`}
                >
                  <span
                    className={`absolute ${data.width} h-[6px]  ${data.fill} rounded-md`}
                  ></span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CurrentPlan;
