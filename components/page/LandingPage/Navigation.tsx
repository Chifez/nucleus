'use client';

import React, { useState, useRef, MouseEvent } from 'react';
import Button from '@/components/Shared/Button';
import useHash from '@/hooks/useHash';
import useUserState from '@/store/user';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BiAtom } from 'react-icons/bi';
import { CgCloseO, CgMenuRound } from 'react-icons/cg';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

interface LinkItem {
  title: string;
  link: string;
}

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [tabBoundingBox, setTabBoundingBox] = useState<DOMRect | null>(null);
  const [wrapperBoundingBox, setWrapperBoundingBox] = useState<DOMRect | null>(
    null
  );
  const [highlightedTab, setHighlightedTab] = useState<string | null>(null);
  const [isHoveredFromNull, setIsHoveredFromNull] = useState<boolean>(true);

  const highlightRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { user, setUser } = useUserState();
  const route = useRouter();
  const hash = useHash();

  const links: LinkItem[] = [
    { title: 'Features', link: '#features' },
    { title: 'Pricing', link: '#pricing' },
    { title: 'FAQs', link: '#faq' },
    { title: 'Blog', link: 'blog' },
  ];

  const isActive = (link: string): boolean => link === hash;

  const repositionHighlight = (
    e: MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    const target = e.target as HTMLAnchorElement;
    setTabBoundingBox(target.getBoundingClientRect());
    if (wrapperRef.current) {
      setWrapperBoundingBox(wrapperRef.current.getBoundingClientRect());
    }
    setIsHoveredFromNull(!highlightedTab);
    setHighlightedTab(link);
  };

  const resetHighlight = () => setHighlightedTab(null);

  const highlightStyles: React.CSSProperties = {};

  if (tabBoundingBox && wrapperBoundingBox) {
    highlightStyles.transitionDuration = isHoveredFromNull ? '0ms' : '150ms';
    highlightStyles.opacity = highlightedTab ? 1 : 0;
    highlightStyles.width = `${tabBoundingBox.width}px`;
    highlightStyles.transform = `translate(${
      tabBoundingBox.left - wrapperBoundingBox.left
    }px)`;
  }

  return (
    <div className="sticky top-0 max-h-[20vh] flex items-center justify-between py-4 px-4 lg:px-20 bg-white shadow-md z-50">
      <div className="flex items-center text-lg text-[#551fff]">
        <BiAtom className="w-10 h-10" />
        <h1 className="text-xl">Nucleus</h1>
      </div>
      <div
        className="md:hidden h-full"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <CgCloseO className="w-9 h-9" />
        ) : (
          <CgMenuRound className="w-9 h-9" />
        )}
      </div>

      <div
        ref={wrapperRef}
        onMouseLeave={resetHighlight}
        className="relative hidden md:flex items-center gap-20"
      >
        <div
          className="absolute z-20 bg-gray-200 text-black h-8 rounded transition-all duration-150"
          style={highlightStyles}
        />
        <ul className="flex items-center">
          {links.map((items, idx) => (
            <div key={idx} className="relative z-50" ref={highlightRef}>
              <Link
                href={items.link}
                onMouseOver={(ev) => repositionHighlight(ev, items.link)}
                className={`z-50  font-medium px-4 py-2 transition-all `}
              >
                {items.title}
              </Link>
              <span
                className={`absolute -bottom-5 right-[15%] transition-all duration-200  h-1 bg-black ${
                  isActive(items.link)
                    ? ' w-[70%] border-b-2 border-grey-500'
                    : 'w-0 '
                }`}
              ></span>
            </div>
          ))}
        </ul>
      </div>
      <div className="hidden md:flex items-center gap-4">
        <Link href="https://github.com/Chifez">
          <FaGithub className="w-7 h-7" />
        </Link>
        <Button
          className="w-fit text-base font-medium px-4"
          handleClick={() => route.push('/dashboard')}
        >
          Dashboard →
        </Button>
      </div>

      {/* mobile nav */}
      {isMenuOpen && (
        <span className="flex flex-col justify-between md:hidden absolute top-[72px] right-0 bg-white p-8 w-[80vw] h-[calc(100vh-72px)]">
          <ul className="flex flex-col items-start gap-10">
            {links.map((items, idx) => (
              <div key={idx} className="group relative">
                <Link href={items.link} className="font-medium">
                  {items.title}
                </Link>
                <span
                  className={`absolute -bottom-5 right-[15%] transition-all duration-200  h-1 bg-black ${
                    isActive(items.link)
                      ? ' w-[70%] border-b-2 border-grey-500'
                      : 'w-0 '
                  }`}
                ></span>
              </div>
            ))}
          </ul>
          <div></div>

          <div className="space-y-10">
            <Button
              className="w-full text-base font-medium px-4"
              handleClick={() => route.push('/dashboard')}
            >
              Go To Dashboard →
            </Button>
            <div className="flex flex-row justify-center items-center gap-2">
              <Link href="https://github.com/Chifez">
                <FaGithub className="w-7 h-7" />
              </Link>
              <Link href="https://github.com/Chifez">
                <FaLinkedinIn className=" w-5 h-5" />
              </Link>
            </div>
          </div>
        </span>
      )}
    </div>
  );
};

export default Navigation;
