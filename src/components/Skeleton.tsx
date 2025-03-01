const Skeleton = () => {
  return (
    <div
      role="status"
      className="w-full animate-pulse pt-20 h-[180px] md:h-[240px]"
    >
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 max-w-48 mb-4"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>

      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Skeleton;
