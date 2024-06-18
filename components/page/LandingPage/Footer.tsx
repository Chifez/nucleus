import React from 'react';
import { BiAtom } from 'react-icons/bi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
// import { RiTwitterXFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <section className=" h-full w-full px-4 lg:px-20 py-20">
      <div className="flex md:flex-row flex-col items-start gap-8 justify-between my-4">
        <div className="space-y-4">
          <div className="flex items-center text-lg text-[#551fff]">
            <BiAtom className="w-10 h-10" />
            <h1 className="text-2xl">Nucleus</h1>
          </div>
          <div className="flex gap-2">
            <FaGithub className=" w-5 h-5" />
            <FaLinkedinIn className=" w-5 h-5" />
          </div>
        </div>
        <div className="flex items-start justify-start gap-16 md:gap-4 text-slate-400 text-lg">
          <span className="list-none space-y-3">
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </span>
          <span className="list-none space-y-3">
            <li>
              <a>Careers</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
            <li>
              <a>Privacy</a>
            </li>
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-slate-400 text-sm">
          © All rights reserved. Nucleus™ Inc 2024
        </p>
      </div>
    </section>
  );
};

export default Footer;
