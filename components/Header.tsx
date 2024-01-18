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

  const toggleDropDown = (event: any) => {
    event.stopPropagation();
    setShowDropDown(!showDropDown);
  };

  return (
    <header
      onClick={handleClickOutside}
      className="h-[90px] w-full border-b-[#EFEFEF] border-b-[1px] flex justify-between items-center p-8"
    >
      <div className="flex flex-col text-[16px]">
        <span>반갑습니다. 홍길동 사원님!🖐</span>
        <span>오스템 임플란트 치과</span>
      </div>
      <div className="flex gap-2">
        <button className="border-[1px] border-[#EFEFEF] rounded-md p-2">
          <Bell className="h-4 w-4" />
        </button>
        <Image
          src="/avatar.png"
          alt="avatar"
          width={100}
          height={100}
          className="h-8 w-8 rounded-md"
          onClick={toggleDropDown}
        />
        {showDropDown && <DropDown closeDropdown={handleClickOutside} />}
      </div>
    </header>
  );
};

export default Header;
