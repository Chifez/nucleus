'use client';
import Button from '@/components/Shared/Button';
import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

const Hero = () => {
  return (
    <section>
      <div className="h-full w-full flex items-center justify-center gap-2 px-10 py-20">
        <div className="w-full h-full flex flex-col items-start justify-between gap-4">
          <div>
            <p className="text-[#92959E] font-bold text-sm">
              {' '}
              → FREE 30 DAYS TRIAL
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-4 items-start text-start text-6xl font-semibold tracking-wide mb-4">
              <h1>The All In One Tool</h1>
              <h1> for Managing Your</h1>
              <h1>
                Public <span className="text-[#551FFF]">API</span>
              </h1>
            </div>
            <span>
              <p className="text-[#87888b] font-medium text-sm w-[90%] ">
                Equipped with a seamless integration and security protocol,
                nucleus is the tool you need to monitor and quantify how your
                API&rsquo;s are being used all in one place.
              </p>
            </span>
          </div>

          <div className="flex gap-2">
            <Button className="relative w-fit text-base font-medium px-8 shine">
              Get started 🚀
            </Button>
            <Button className="relative w-fit text-base font-medium px-8 bg-transparent border border-[#551FFF] hover:text-white text-[#551FFF] overflow-hidden swipe">
              Get a demo 📖
            </Button>
          </div>
        </div>

        <div className="w-full">
          <div className="relative  w-[45vw] h-[60vh]  rounded-md bg-gradient-to-r from-blue-500 via-sky-800 to-indigo-700">
            <Image
              src="/frame_generic_light.png"
              alt="frame"
              layout="fill"
              objectFit="cover"
              className="p-4 rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="text-center w-full text-[#92959E] text-2xl font-medium">
        <p>
          Trusted by thousand of Individuals and teams <br /> around the world
        </p>
        <Marquee>
          <div>logo1 </div>
          <div>logo1 </div>
          <div>logo1 </div>
          <div>logo1 </div>
          <div>logo1 </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Hero;
