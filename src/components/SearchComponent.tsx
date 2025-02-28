const SearchComponent = () => {
  return (
    <div className="px-5 flex flex-col gap-3 md:items-center md:justify-center">
      <h3 className="font-bold text-[20px] md:text-[26px]">
        Please enter a movie name
      </h3>

      <form className="flex items-center justify-center gap-3">
        <input
          className="border w-full md:w-[50vw] p-2 rounded-sm outline-none"
          type="text"
          placeholder="Enter a valid movie name"
        />
        <button type="button" className="bg-red-600 px-4 py-2 rounded-md font-bold cursor-pointer hover:bg-red-600/80 transition-all">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchComponent;
