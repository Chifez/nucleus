import Link from 'next/link';
import React, { useEffect, useState, useContext } from 'react';
import { FaUserAlt, FaFileInvoice } from 'react-icons/fa';
import { RiBillFill } from 'react-icons/ri';
import { AiTwotoneSetting } from 'react-icons/ai';
import { MdPhoneInTalk } from 'react-icons/md';
import { RiLogoutBoxFill } from 'react-icons/ri';
import { BiAtom, BiChevronsLeft, BiChevronsRight } from 'react-icons/bi';
import { useRouter } from 'next/router';
import { sideBarContext } from '@/context/sidebarContext';
import {
  TbSquareRoundedChevronsRightFilled,
  TbSquareRoundedChevronsLeftFilled,
} from 'react-icons/tb';
import ToggleTheme from '@/components/ToggleTheme';
const links = [
  { id: 1, name: 'profile', links: '/', icon: <FaUserAlt /> },
  { id: 2, name: 'Billings', links: '/billings', icon: <RiBillFill /> },
  { id: 3, name: 'Invoices', links: '/invoices', icon: <FaFileInvoice /> },
  { id: 4, name: 'Settings', links: '/settings', icon: <AiTwotoneSetting /> },
  { id: 5, name: 'Help', links: '/help', icon: <MdPhoneInTalk /> },
  { id: 6, name: 'LogOut', links: '/logout', icon: <RiLogoutBoxFill /> },
];

interface Link {
  id: number;
  name: string;
  links: string;
  icon: JSX.Element;
}
const SideBar = () => {
  const { isOpen, toggleOpen } = useContext(sideBarContext);
  const router = useRouter();
  const currentPath = router.pathname;
  return (
    <div
      className={`hidden ${
        isOpen ? 'w-[6vw]' : 'w-[15vw]'
      } relative px-2 py-5 rounded-l-xl lg:flex flex-col items-center gap-8 dark:bg-[#0c0c0d] transition-all duration-600`}
    >
      <div className=" flex items-center text-lg py-3 text-[#551fff]">
        <BiAtom className="w-6 h-6" />
        <h1 className={`${isOpen && 'hidden'}`}>Nucleus</h1>
      </div>
      <div
        className="absolute -right-5 top-9 w-8 h-8 text-[#551FFF] dark:text-white hover:text-[#D0D2DA] cursor-pointer"
        onClick={toggleOpen}
      >
        {isOpen ? (
          <TbSquareRoundedChevronsRightFilled className="w-5 h-5" />
        ) : (
          <TbSquareRoundedChevronsLeftFilled className="w-6 h-6" />
        )}
      </div>
      <div className="h-full flex flex-col justify-between">
        {links.map((item, idx) => (
          <Link
            href={item.links}
            key={idx}
            className={`flex items-center justify-center ${
              isOpen ? 'px-5' : 'px-8'
            } py-4 gap-2 cursor-pointer hover:text-[#551FFF] hover:bg-[#F3F0FF] rounded-3xl ${
              currentPath == item.links
                ? 'bg-[#F3F0FF] text-[#551FFF]'
                : 'text-[#D0D2DA]'
            }`}
            title={isOpen ? item.name : ''}
          >
            <span
              className={`flex justify-center gap-2 
             ${isOpen ? 'w-fit items-stretch' : 'w-20 items-stretch'}
            `}
            >
              <div>{item.icon}</div>
              <h1
                className={`leading-none w-full text-sm capitalize ${
                  isOpen && 'hidden'
                } `}
              >
                {item.name}
              </h1>
            </span>
          </Link>
        ))}
      </div>
      <ToggleTheme />
    </div>
  );
};

export default SideBar;
