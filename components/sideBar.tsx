import Pricing from "@/pages/billings";
import Profile from "@/pages/settings";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaUserAlt, FaFileInvoice } from "react-icons/fa";
import { RiBillFill } from "react-icons/ri";
import { AiTwotoneSetting } from "react-icons/ai";
import { MdPhoneInTalk } from "react-icons/md";
import { RiLogoutBoxFill } from "react-icons/ri";
import { BiAtom } from "react-icons/bi";
const links = [
  { id: 1, name: "profile", links: "/", icon: <FaUserAlt /> },
  { id: 2, name: "Billings", links: "/billings", icon: <RiBillFill /> },
  { id: 3, name: "Invoices", links: "/invoices", icon: <FaFileInvoice /> },
  { id: 4, name: "Settings", links: "/settings", icon: <AiTwotoneSetting /> },
  { id: 5, name: "Help", links: "/help", icon: <MdPhoneInTalk /> },
  { id: 6, name: "LogOut", links: "/logout", icon: <RiLogoutBoxFill /> },
];

const SideBar = () => {
  const [active, setIsActive] = useState("profile");
  const handleClick = (
    page: string,
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    // e.preventDefault();
    setIsActive(page);
  };

  return (
    <div className="col-span-1  px-2 py-5 rounded-l-xl flex flex-col items-center gap-8">
      <div className=" flex items-center text-lg py-3 text-[#551FFF]">
        <BiAtom className="w-6 h-6" />
        <h1>Nucleus</h1>
      </div>
      {links.map((item, idx) => (
        <Link
          href={item.links}
          key={idx}
          onClick={(e) => {
            handleClick(item.name, e);
          }}
          className={`flex items-center justify-center w-fit px-8 py-4 gap-2 cursor-pointer hover:text-[#551FFF] hover:bg-[#F3F0FF] rounded-3xl ${
            active == item.name
              ? "bg-[#F3F0FF] text-[#551FFF]"
              : "text-[#D0D2DA]"
          }`}
        >
          <span className="flex items-stretch gap-5 w-20">
            <div className="w-2 h-2">{item.icon}</div>
            <h1 className="leading-none text-sm capitalize">{item.name}</h1>
          </span>
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
