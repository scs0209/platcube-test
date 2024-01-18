import { UserCircle } from "lucide-react";
import { MouseEventHandler } from "react";

interface Props {
  closeDropdown: MouseEventHandler;
}

const DropDown = ({ closeDropdown }: Props) => {
  return (
    <div onClick={closeDropdown} className="fixed inset-0 z-10">
      <div className="absolute z-10 top-16 right-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
        <div className="px-4 py-3 text-sm text-gray-900 ">
          <div className="flex items-center gap-2 text-[16px]">
            <UserCircle className="w-5 h-5" />내 프로필
          </div>
          <div className="text-[#B9B9B9] text-[14px]">name@platcube.com</div>
        </div>
        <ul className="py-2 text-sm text-gray-700 ">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
              Dashboard
            </a>
          </li>
        </ul>
        <div className="py-1">
          <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">
            Sign out
          </span>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
