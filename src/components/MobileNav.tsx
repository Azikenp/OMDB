import { useState } from "react";
import HeaderItem from "./HeaderItem";
import { HiDotsVertical } from "react-icons/hi";

interface MenuItem {
  name: string;
  icon: React.ElementType;
}
interface DesktopNavProps {
  menu: MenuItem[];
}

const MobileNav = ({ menu }: DesktopNavProps) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex md:hidden gap-2.5">
      {menu.map(
        (item, index) =>
          index < 3 && <HeaderItem key={item.name} name={""} Icon={item.icon} />
      )}
      <div
        className="md:hidden"
        onClick={(e) => {
          e.preventDefault();
          setToggle(!toggle);
        }}
      >
        <HeaderItem name={""} Icon={HiDotsVertical} />
        {toggle && (
          <div className="absolute mt-4 bg-[#121212] border-[1px] border-gray-700 px-3 py-4 z-30 flex flex-col gap-2">
            {menu.map(
              (item, index) =>
                index > 2 && (
                  <HeaderItem
                    key={item.name}
                    name={item.name}
                    Icon={item.icon}
                  />
                )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileNav;
