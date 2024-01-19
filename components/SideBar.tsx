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
        icon: <Home />,
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
    className: "mt-8",
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
    <div className="h-full top-0 left-0 absolute w-[76px] bg-[#0E2044] text-white flex flex-col items-center">
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
