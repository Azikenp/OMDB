import { Link } from "react-router-dom";

const HeaderItem = ({
  name,
  Icon,
  toggler,
}: {
  name: string;
  Icon: React.ElementType;
  toggler?: boolean;
}) => {
  return (
    <Link
      to="/"
      onClick={(e) => toggler && e.preventDefault()}
      className="text-white flex items-center gap-1 md:gap-3 text-[15px] font-semibold cursor-pointer md:hover:underline underline-offset-8"
    >
      <Icon />
      <h2 className="text-[12px]">{name}</h2>
    </Link>
  );
};

export default HeaderItem;
