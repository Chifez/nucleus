import Button from '@/components/Shared/Button';
import useUserState from '@/store/user';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { BiAtom } from 'react-icons/bi';
import { CgCloseO, CgMenuRound } from 'react-icons/cg';
import { FaGithub } from 'react-icons/fa';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentRoute = usePathname();
  const { user, setUser } = useUserState();

  const links = [
    { title: 'About', link: '#about' },
    { title: 'Features', link: '#features' },
    { title: 'Pricing', link: '#pricing' },
    { title: 'FAQs', link: '#faq' },
  ];

  return (
    <div className="sticky top-0 max-h-[20vh] flex item-center justify-between py-4 px-4 lg:px-20 bg-white shadow-md z-50">
      <div className="flex items-center text-lg text-[#551fff]">
        <BiAtom className="w-10 h-10" />
        <h1 className="text-xl">Nucleus</h1>
      </div>
      <div className=" md:hidden h-full ">
        {isMenuOpen ? (
          <CgCloseO className="w-9 h-9" />
        ) : (
          <CgMenuRound className="w-9 h-9" />
        )}
      </div>

      <ul className="hidden md:flex items-center gap-20 justify-between">
        {links.map((items, idx) => (
          <li key={idx} className="group relative">
            <Link href={items.link} className="font-medium">
              {items.title}
            </Link>
            <span
              className={`absolute bottom-0 transition-all duration-200 left-0 h-1 w-0 group-hover:w-full rounded-md lg:bg-[#551fff] ${
                currentRoute === items.link ? 'w-full lg:bg-[#551fff]' : ''
              }`}
            ></span>
          </li>
        ))}
      </ul>
      <div className="hidden md:flex items-center gap-4">
        <Link href="https://github.com/Chifez">
          <FaGithub className=" w-7 h-7" />
        </Link>
        <Button className="w-fit text-base font-medium px-4">
          Dashboard →
        </Button>
      </div>

      {/* mobile nav */}
      <span className="flex flex-col justify-between md:hidden absolute top-[72px] right-0 bg-white p-8 w-[70vw] h-[80vh]">
        <ul className="flex flex-col items-start gap-20 ">
          {links.map((items, idx) => (
            <li key={idx} className="group relative">
              <Link href={items.link} className="font-medium">
                {items.title}
              </Link>
              <span
                className={`absolute bottom-0 transition-all duration-200 left-0 h-1 w-0 group-hover:w-full rounded-md lg:bg-[#551fff] ${
                  currentRoute === items.link ? 'w-full lg:bg-[#551fff]' : ''
                }`}
              ></span>
            </li>
          ))}
        </ul>
        <div className="flex flex-cols items-center gap-4">
          <Link href="https://github.com/Chifez">
            <FaGithub className=" w-7 h-7" />
          </Link>
          <Button className="w-fit text-base font-medium px-4">
            Dashboard →
          </Button>
        </div>
      </span>
    </div>
  );
};

export default Navigation;
