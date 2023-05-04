import { useState } from "react";
import SideBar from "./sideBar";

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
      <div className="flex-1 bg-[#EAEAEA] px-5 py-2 overflow-y-scroll">
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
