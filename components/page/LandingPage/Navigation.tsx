import Button from '@/components/Shared/Button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { BiAtom } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';

const Navigation = () => {
  const currentRoute = usePathname();

  const links = [
    { title: 'About', link: '#about' },
    { title: 'Features', link: '#features' },
    { title: 'Pricing', link: '#pricing' },
    { title: 'FAQs', link: '#faq' },
  ];

  return (
    <div className="sticky top-0 max-h-[20vh] flex item-center justify-between py-4 px-10 bg-white shadow-md">
      <div className="flex items-center text-lg text-[#551fff]">
        <BiAtom className="w-6 h-6" />
        <h1 className="">Nucleus</h1>
      </div>
      <ul className="flex items-center gap-20 justify-between">
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
      <div className="flex items-center gap-4">
        <Link href="https://github.com/Chifez">
          <FaGithub className=" w-7 h-7" />
        </Link>
        <Button className="w-fit text-base font-medium px-4">
          Dashboard →
        </Button>
      </div>
    </div>
  );
};

export default Navigation;
