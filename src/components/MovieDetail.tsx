import { useNavigate } from "react-router-dom";

const MovieDetail = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div className="p-5 flex flex-col gap-5">
      <h2 className="text-2xl font-bold">
        {movie.Title} ({movie.Year})
      </h2>

      <div className="flex justify-center gap-3">
        <img
          className="w-64 h-96 object-cover"
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/300"
          }
          alt={movie.Title}
        />

        <div className="flex flex-col gap-3">
          <p className="text-lg">
            <strong>Plot:</strong> {movie.Plot}
          </p>
          <p>
            <strong>Director:</strong> {movie.Director}
          </p>
          <p>
            <strong>Actors:</strong> {movie.Actors}
          </p>
          <p>
            <strong>IMDb Rating:</strong> {movie.imdbRating}
          </p>
          <button
            className="bg-red-600 cursor-pointer px-4 py-2 rounded-md w-fit"
            onClick={() => navigate("/")}
          >
            Watch now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
