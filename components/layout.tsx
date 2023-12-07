import { useState } from 'react';
import SideBar from './SideBar';
import ToggleTheme from './ToggleTheme';

interface Link {
  id: number;
  name: string;
  links: string;
  icon: JSX.Element;
}

const Layout = (props: { children: JSX.Element }) => {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <SideBar />
      <div className="flex-1 bg-[#EAEAEA] dark:bg-slate-600 dark:text-black px-5 py-2 h-full overflow-y-scroll ">
        <div className="absolute top-5 right-10">
          <ToggleTheme />
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
