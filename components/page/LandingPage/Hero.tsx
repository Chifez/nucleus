'use client';

import Button from '@/components/Shared/Button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import Marquee from 'react-fast-marquee';

const Hero = () => {
  const logo = [
    '/firebase.png',
    '/netlify.png',
    '/nextjs.png',
    '/gthub.png',
    '/heroku.png',
    '/postman.png',
    '/vercel.png',
  ];

  const route = useRouter();

  return (
    <section>
      <div className="h-full w-full flex lg:flex-row flex-col items-center justify-center gap-2 px-4 lg:px-20 py-20 lg:py-10">
        <div className="w-full h-full flex flex-col items-start justify-between gap-4">
          <div>
            <p className="text-[#92959E] font-bold text-sm">
              {' '}
              → FREE 30 DAYS TRIAL
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-4 items-start text-start text-5xl font-semibold tracking-wide mb-4">
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
            <Button
              className="relative w-fit text-base font-medium px-4 md:px-8 shine"
              handleClick={() => route.push('/auth/login')}
            >
              Get started 🚀
            </Button>
            <Button className="relative w-fit text-base font-medium px-4 md:px-8  bg-transparent border border-[#551FFF] !text-[#551FFF] hover:!text-white  overflow-hidden swipe">
              Book a demo 📖
            </Button>
          </div>
        </div>

        <div className=" w-full">
          <div className="relative w-[90vw] h-[40vh] md:w-full lg:w-[45vw] lg:h-[60vh] rounded-md bg-gradient-to-r from-blue-500 via-sky-800 to-indigo-700">
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
      <div className="text-center w-full text-[#92959E] text-xl font-medium">
        <p>
          Trusted by thousand of Individuals and teams <br /> around the world
        </p>
        <Marquee gradientWidth={500} gradient className="my-2">
          {logo.map((item, idx) => (
            <div className="relative w-36 h-20  mx-4" key={idx}>
              <Image src={item} alt="frame" layout="fill" objectFit="contain" />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Hero;
