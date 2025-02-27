import HeaderItem from "./HeaderItem";

interface MenuItem {
  name: string;
  icon: React.ElementType;
}
interface DesktopNavProps {
  menu: MenuItem[];
}

const DesktopNav = ({ menu }: DesktopNavProps) => {

  return (
    <div className="hidden md:flex gap-8">
      {menu.map((item) => (
        <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
      ))}
    </div>
  );
};

export default DesktopNav;
