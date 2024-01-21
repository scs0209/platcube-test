"use client";

import { Bell } from "lucide-react";
import Image from "next/image";
import DropDown from "./DropDown";
import { useState } from "react";

const Header = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  const handleClickOutside = () => {
    setShowDropDown(false);
  };

  const toggleDropDown = (e: any) => {
    e.stopPropagation();
    setShowDropDown(!showDropDown);
  };

  return (
    <header className="h-[90px] w-full border-b-[#EFEFEF] border-b-[1px] flex justify-between items-center px-10 py-5">
      <div className="flex flex-col text-[16px]">
        <span className="font-bold">반갑습니다. 홍길동 사원님!🖐</span>
        <span>오스템 임플란트 치과</span>
      </div>
      <div className="flex gap-2">
        <button className="border-[1px] border-[#EFEFEF] rounded-lg p-2 relative">
          <Bell className="h-6 w-6" />
          <span className="absolute -top-1 -right-2 bg-[#2D8CFF] text-white text-[12px] rounded-full h-4 w-4 flex items-center justify-center">
            2
          </span>
        </button>
        <Image
          src="/avatar.png"
          alt="avatar"
          width={100}
          height={100}
          className={`border-[1px] rounded-lg h-11 w-11 ${
            showDropDown ? "border-blue-500" : "border-transparent"
          }`}
          onClick={toggleDropDown}
        />
        {showDropDown && <DropDown closeDropdown={handleClickOutside} />}
      </div>
    </header>
  );
};

export default Header;
