import React, { ReactNode } from "react";
import SideBar from "./sideBar";

const Layout = (props: { children: JSX.Element }) => {
  return (
    <div className="h-screen w-screen overflow-hidden grid grid-cols-6">
      <SideBar />
      <div className="col-span-5 bg-[#EAEAEA] p-2">{props.children}</div>
    </div>
  );
};

export default Layout;
