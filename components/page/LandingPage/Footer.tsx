import React from 'react';
import { BiAtom } from 'react-icons/bi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
// import { RiTwitterXFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <section className=" h-full w-full px-4 lg:px-20 pt-20 pb-10">
      <div className="flex md:flex-row flex-col items-start gap-8 justify-between my-4">
        <div className="space-y-4">
          <div className="flex items-center text-lg text-[#551fff]">
            <BiAtom className="w-10 h-10" />
            <h1 className="text-2xl">Nucleus</h1>
          </div>
          <div className="flex gap-2">
            <div className=" p-2 flex items-center">
              <FaGithub className=" w-5 h-5" />
            </div>
            <div className=" p-2 flex items-center">
              <FaLinkedinIn className=" w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="flex items-start justify-start gap-16 text-lg cursor-pointer">
          <span className="text-sm list-none space-y-3">
            <li className="text-sm font-medium">
              <a>Quick Links</a>
            </li>
            <li className="text-sm">
              <a href="#features">Features</a>
            </li>
            <li className="text-sm ">
              <a href="#pricing">Pricing</a>
            </li>
            <li className="text-sm ">
              <a href="#blog">Blog</a>
            </li>
            <li className="text-sm ">
              <a href="#FAQs">FAQs</a>
            </li>
          </span>
          <span className="list-none space-y-3 cursor-pointer">
            <li className="text-sm font-medium">
              <a>Getting Started</a>
            </li>
            <li className="text-sm ">
              <a>Documentation</a>
            </li>
            <li className="text-sm">
              <a>Book a Demo</a>
            </li>
          </span>

          <span className="list-none space-y-3 cursor-pointer">
            <li className="text-sm font-medium">
              <a>Legal</a>
            </li>
            <li className="text-sm ">
              <a>Contact Us</a>
            </li>
            <li className="text-sm">
              <a>Privacy policy</a>
            </li>
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center pt-5">
        <p className="text-sm">© All rights reserved. Nucleus™ Inc 2024</p>
      </div>
    </section>
  );
};

export default Footer;
