import { useNavigate } from "react-router-dom";

const MovieDetail = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div className="px-8 md:px-16 flex flex-col gap-5 border-b border-gray-500 pb-16">
      <h2 className="text-2xl font-bold">
        {movie.Title} ({movie.Year})
      </h2>

      <div className="flex flex-col md:flex-row justify-center md:justify-start gap-3">
        <img
          className="w-68 md:w-64 h-84 rounded-sm object-fit"
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/300"
          }
          alt={movie.Title}
        />

        <div className="flex flex-col gap-3">
          <p className="text-lg">{movie.Plot}</p>
          <p>
            <strong>Director:</strong> {movie.Director}
          </p>
          <p>
            <strong>Starring:</strong> {movie.Actors}
          </p>
          <p>
            <strong>IMDb Rating:</strong> {movie.imdbRating}
          </p>
          <p>
            <strong>Release Date:</strong>{" "}
            {movie.Released ? movie.Released : movie.Year}
          </p>
          <button
            className="bg-blue-600 hover:bg-blue-500 cursor-pointer px-4 py-2 rounded-md w-fit font-bold"
            onClick={() => navigate("/")}
          >
            Watch More
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
