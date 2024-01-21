import {
  Calendar,
  Clock,
  Headphones,
  Home,
  Menu,
  Monitor,
  Settings,
  ShieldPlusIcon,
  User,
  Wrench,
} from "lucide-react";
import Image from "next/image";

type MenuItem = {
  icon: JSX.Element;
};

const menuItems: { items: MenuItem[]; className?: string }[] = [
  {
    items: [
      {
        icon: <Menu />,
      },
    ],
    className: "mt-2 mb-10",
  },
  {
    items: [
      {
        icon: (
          <Image
            src="/Logo.png"
            alt="logo"
            width={200}
            height={200}
            className="h-9 w-9 rounded-md"
          />
        ),
      },
    ],
    className: "mt-2 mb-10",
  },
  {
    items: [
      {
        icon: <Home className="text-[#2D8CFF]" />,
      },
    ],
    className: "mb-10",
  },
  {
    items: [
      {
        icon: <Calendar />,
      },
      {
        icon: <Clock />,
      },
      {
        icon: <User />,
      },
      {
        icon: <Monitor />,
      },
      {
        icon: <ShieldPlusIcon />,
      },
    ],
    className: "flex flex-col space-y-4",
  },
  {
    items: [
      {
        icon: <Headphones />,
      },
    ],
    className: "mt-16",
  },
  {
    items: [
      {
        icon: <Wrench />,
      },
      {
        icon: <Settings />,
      },
    ],
    className: "flex flex-col h-full justify-end space-y-4 mb-4",
  },
];

const SideBar = () => {
  return (
    <div className="h-full top-0 left-0 absolute w-[76px] bg-[#0E2044] text-white flex flex-col p-5 items-center">
      {menuItems.map((group, idx) => (
        <div key={idx} className={group.className}>
          {group.items.map((menu, idx) => (
            <div key={idx}>{menu.icon}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
