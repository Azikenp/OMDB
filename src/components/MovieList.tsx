import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Skeleton from "./Skeleton";

interface MovieProps {
  movie: {
    Title: string;
    Year: string;
    Poster: string;
    imdbID: string;
  };
}

const MovieList = ({ movie }: MovieProps) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const handleMovieClick = (id: string) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div
      className="p-2 border rounded shadow cursor-pointer group"
      onClick={() => handleMovieClick(movie.imdbID)}
    >
      {isLoading && <Skeleton />}

      <img
        src={movie.Poster && movie.Poster}
        alt={movie.Title}
        className={`w-full h-[180px] md:h-[280px] object-cover rounded-md group-hover:scale-105 transition-all ${
          isLoading ? "hidden" : "group-hover:scale-105"
        }`}
        onLoad={() => setIsLoading(false)}
      />
      <h4 className="text-center text-[12px] md:text-[18px] font-bold mt-2">
        {movie.Title} ({movie.Year})
      </h4>
    </div>
  );
};

export default MovieList;
