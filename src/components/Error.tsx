const Error = ({ error }: {error:string}) => {
  return <div className="h-[60vh] px-8 md:px-16 text-red-500">{error}</div>;
};

export default Error;
