const MovieList = ({ movie }) => {
  return (
    <div className="p-1 border rounded shadow cursor-pointer">
      <img
        src={movie.Poster ? movie.Poster : "https://via.placeholder.com/150"}
        alt={movie.Title}
        className="w-full h-[180px] object-cover rounded-md"
      />
      <h4 className="text-center text-[12px] md:text-[18px] font-bold mt-2">
        {movie.Title} ({movie.Year})
      </h4>
    </div>
  );
};

export default MovieList;
