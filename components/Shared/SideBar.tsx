'use client';

import Link from 'next/link';
import React, { useEffect, useState, useContext } from 'react';
import { FaUserAlt, FaFileInvoice } from 'react-icons/fa';
import { RiBillFill } from 'react-icons/ri';
import { AiTwotoneSetting } from 'react-icons/ai';
import { MdPhoneInTalk } from 'react-icons/md';
import { RiLogoutBoxFill } from 'react-icons/ri';
import { BiAtom, BiChevronsLeft, BiChevronsRight } from 'react-icons/bi';
import { usePathname, useRouter } from 'next/navigation';

import Image from 'next/image';
import {
  TbSquareRoundedChevronsRightFilled,
  TbSquareRoundedChevronsLeftFilled,
} from 'react-icons/tb';
import ToggleTheme from '@/components/Shared/ToggleTheme';
import useSideBarState from '@/store/siderbar';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { handleLogout } from '@/lib/functions/auth';
import { createClient } from '@/utils/supabase/client';
import useDimension from '@/hooks/useDimension';
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
  const [userDetails, setUserDetails] = useState({
    email: '',
    fullName: '',
    avatar: '',
  });

  const currentPath = usePathname();
  const supabase = createClient();
  const isMobile = useDimension();

  const handleClickLink = () => {
    if (isMobile) {
      toggleOpen();
    } else {
      return;
    }
  };

  useEffect(() => {
    const getUserDetails = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user && user.identities) {
        const currentUserDetails = user?.identities[0]?.identity_data;
        setUserDetails({
          ...userDetails,
          email: currentUserDetails?.email,
          fullName: currentUserDetails?.full_name,
          avatar: currentUserDetails?.avatar_url,
        });
        console.log('user from sidebar', user?.identities[0]?.identity_data);
      }
    };
    getUserDetails();
  }, []);
  return (
    <div
      className={`fixed bg-white w-[50vw] h-[100dvh] z-50 md:h-full md:z-0 md:relative px-4 py-5 rounded-l-xl flex flex-col items-start justify-between gap-8 dark:bg-[#0c0c0d] transition-all duration-600 ${
        isOpen
          ? 'items-center -translate-x-[100%] md:translate-x-0 md:w-[6vw]'
          : 'items-start translate-x-0 md:w-[15vw]'
      } `}
    >
      <span className="w-full space-y-4">
        <div className="flex w-full items-center justify-center gap-1 py-3 text-[#551fff]">
          <BiAtom className="w-6 h-6" />
          <h1 className={`${isOpen && 'md:hidden'} font-semibold text-base`}>
            Nucleus
          </h1>
        </div>

        <div className="w-full h-fit pb-4 border-b gap-1 flex flex-col justify-between">
          {links.map((item, idx) => (
            <Link
              prefetch={true}
              href={item.links}
              onClick={handleClickLink}
              key={idx}
              className={`flex w-full items-center   ${
                isOpen
                  ? 'justify-center rounded-full'
                  : 'justify-start rounded-lg'
              } p-3 cursor-pointer hover:text-[#551FFF] hover:bg-[#F3F0FF]  ${
                currentPath == item.links
                  ? 'bg-[#F3F0FF] text-[#551FFF]'
                  : 'text-[#9e9fa1]'
              }`}
              title={isOpen ? item.name : ''}
            >
              <span
                className={`flex items-center 
              ${isOpen ? '' : ' w-20 gap-2'}
            `}
              >
                <div>{item.icon}</div>
                {!isOpen && (
                  <h1 className={`leading-none w-full text-sm capitalize `}>
                    {item.name}
                  </h1>
                )}
              </span>
            </Link>
          ))}
          <button
            className={`flex w-full items-center ${
              isOpen
                ? 'justify-center rounded-full'
                : ' justify-start rounded-lg'
            } p-3 cursor-pointer hover:text-[#551FFF] text-[#9e9fa1] hover:bg-[#F3F0FF] `}
            title={isOpen ? 'LogOut' : ''}
            onClick={() => handleLogout()}
          >
            <span
              className={`flex items-center 
            ${isOpen ? ' justify-center' : 'justify-start w-20 gap-2 '}
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
      </span>

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

      <span className=" w-full  space-y-4">
        <div className="w-full flex items-center justify-center">
          <ToggleTheme />
        </div>

        <div
          className={`"line-clamp-1 flex items-center gap-2 text-lg py-1 ${
            isOpen ? 'px-1 justify-center' : 'pl-1 pr-3 justify-start'
          }  dark:bg-[#41395b] dark:text-black rounded-full`}
        >
          <div className="relative w-6 h-6 rounded-full ">
            <Image
              src={userDetails.avatar ?? '/corporate.jpg'}
              layout="fill"
              alt="user"
            />
          </div>

          <div className={`${isOpen && 'md:hidden'}`}>
            <h1 className="text-sm font-semibold line-clamp-1 capitalize">
              {userDetails.fullName ?? 'John Doe'}
            </h1>
            <p className="text-xs  text-ellipsis">
              {userDetails.email ?? 'Jonhdoe@gmail.com'}
            </p>
          </div>
        </div>
      </span>
    </div>
  );
};

export default SideBar;
