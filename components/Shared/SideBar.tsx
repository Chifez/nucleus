import Link from 'next/link';
import React, { useEffect, useState, useContext } from 'react';
import { FaUserAlt, FaFileInvoice } from 'react-icons/fa';
import { RiBillFill } from 'react-icons/ri';
import { AiTwotoneSetting } from 'react-icons/ai';
import { MdPhoneInTalk } from 'react-icons/md';
import { RiLogoutBoxFill } from 'react-icons/ri';
import { BiAtom, BiChevronsLeft, BiChevronsRight } from 'react-icons/bi';
import { useRouter } from 'next/router';

import Image from 'next/image';
import {
  TbSquareRoundedChevronsRightFilled,
  TbSquareRoundedChevronsLeftFilled,
} from 'react-icons/tb';
import ToggleTheme from '@/components/Shared/ToggleTheme';
import useSideBarState from '@/store/siderbar';
const links = [
  { id: 1, name: 'profile', links: '/dashboard', icon: <FaUserAlt /> },
  {
    id: 2,
    name: 'Billings',
    links: '/dashboard/billings',
    icon: <RiBillFill />,
  },
  {
    id: 3,
    name: 'Invoices',
    links: '/dashboard/invoices',
    icon: <FaFileInvoice />,
  },
  {
    id: 4,
    name: 'Settings',
    links: '/dashboard/settings',
    icon: <AiTwotoneSetting />,
  },
  { id: 5, name: 'Help', links: '/dashboard/help', icon: <MdPhoneInTalk /> },
];

interface Link {
  id: number;
  name: string;
  links: string;
  icon: JSX.Element;
}
const SideBar = () => {
  const { isOpen, toggleOpen } = useSideBarState();
  const router = useRouter();
  const currentPath = router.pathname;
  return (
    <div
      className={`fixed bg-white w-[50vw] h-[100dvh]  z-50 md:h-full md:z-0 md:relative px-2 py-5 rounded-l-xl flex flex-col items-center gap-8 dark:bg-[#0c0c0d] transition-all duration-600 ${
        isOpen
          ? '-translate-x-[100%] md:translate-x-0 md:w-[6vw]'
          : 'translate-x-0 md:w-[15vw]'
      } `}
    >
      <div className="flex items-center text-lg py-3 text-[#551fff]">
        <BiAtom className="w-6 h-6" />
        <h1 className={`${isOpen && 'md:hidden'}`}>Nucleus</h1>
      </div>
      <div
        className={`"line-clamp-1 flex items-center justify-start gap-2 text-lg py-1 ${
          isOpen ? 'px-1' : 'pl-1 pr-3'
        }  border bg-[#EAEAEA] dark:bg-[#41395b] dark:text-black rounded-full`}
      >
        <div className="relative w-6 h-6 rounded-full overflow-hidden">
          <Image src="/corporate.jpg" layout="fill" alt="user" />
        </div>
        <h1
          className={`${
            isOpen && 'md:hidden'
          } text-sm font-semibold line-clamp-1`}
        >
          Nwosu Ifeanyi
        </h1>
      </div>
      <div
        className="absolute -right-5 top-9 w-8 h-8 text-[#551FFF] dark:text-white hover:text-[#D0D2DA] cursor-pointer"
        onClick={toggleOpen}
      >
        {isOpen ? (
          <TbSquareRoundedChevronsRightFilled className="w-10 h-10 md:w-5 md:h-5" />
        ) : (
          <TbSquareRoundedChevronsLeftFilled className="w-10 h-10 md:w-6 md:h-6" />
        )}
      </div>
      <div className="h-full flex flex-col justify-between">
        {links.map((item, idx) => (
          <Link
            href={item.links}
            key={idx}
            className={`flex items-center justify-center ${
              isOpen ? 'px-8 md:px-5' : 'px-8'
            } py-4 gap-2 cursor-pointer hover:text-[#551FFF] hover:bg-[#F3F0FF] rounded-3xl ${
              currentPath == item.links
                ? 'bg-[#F3F0FF] text-[#551FFF]'
                : 'text-[#D0D2DA]'
            }`}
            title={isOpen ? item.name : ''}
          >
            <span
              className={`flex justify-center gap-2  
             ${isOpen ? 'w-20 md:w-fit items-stretch' : 'w-20 items-stretch'}
            `}
            >
              <div>{item.icon}</div>
              <h1
                className={`leading-none w-full text-sm capitalize ${
                  isOpen && 'md:hidden'
                } `}
              >
                {item.name}
              </h1>
            </span>
          </Link>
        ))}
        <button
          className={`flex items-center justify-center ${
            isOpen ? 'px-8 md:px-5' : 'px-8'
          } py-4 gap-2 cursor-pointer hover:text-[#551FFF] text-[#D0D2DA] hover:bg-[#F3F0FF] rounded-3xl`}
          title={isOpen ? 'LogOut' : ''}
        >
          <span
            className={`flex justify-center gap-2  
             ${isOpen ? 'w-20 md:w-fit items-stretch' : 'w-20 items-stretch'}
            `}
          >
            <div>
              <RiLogoutBoxFill />
            </div>
            <h1
              className={`leading-none w-full text-sm capitalize ${
                isOpen && 'md:hidden'
              } `}
            >
              LogOut
            </h1>
          </span>
        </button>
      </div>
      <ToggleTheme />
    </div>
  );
};

export default SideBar;
