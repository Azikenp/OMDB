import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";

import { HiPlus } from "react-icons/hi";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";

const Header = () => {
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];

  return (
    <div className="flex items-center justify-between p-5 px-8 md:px-16 z-30">
      <div className="flex gap-3 md:gap-8 items-center">
        <div>
          <Link to="/" className="cursor-pointer font-bold">
            <span className="text-red-500">O</span>
            <span className="text-green-500">M</span>
            <span className="text-blue-500">D</span>
            <span className="text-pink-500">B</span>
          </Link>
        </div>

        <div>
          <DesktopNav menu={menu} />
        </div>

        <div>
          <MobileNav menu={menu} />
        </div>
      </div>

      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        alt="avatar"
        className="w-[40px] rounded-full cursor-pointer"
      />
    </div>
  );
};

export default Header;
