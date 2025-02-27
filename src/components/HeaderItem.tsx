const HeaderItem = ({
  name,
  Icon,
}: {
  name: string;
  Icon: React.ElementType;
}) => {
  return (
    <a href="/" className="text-white flex items-center gap-1 md:gap-3 text-[15px] font-semibold cursor-pointer md:hover:underline underline-offset-8">
      <Icon />
      <h2 className="text-[12px]">{name}</h2>
    </a>
  );
};

export default HeaderItem;
