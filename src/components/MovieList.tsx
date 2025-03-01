import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Skeleton from "./Skeleton";

interface MovieProps {
  movie: {
    Title: string;
    Year: string;
    Poster: string;
    imdbID: string;
    Type?: string;
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
      className="flex flex-col gap-3 p-2 border rounded shadow cursor-pointer group"
      onClick={() => handleMovieClick(movie.imdbID)}
    >
      <div className="relative">
        {isLoading && <Skeleton />}
        <img
          src={movie.Poster && movie.Poster}
          alt={movie.Title}
          className={`w-full h-[180px] md:h-[240px] object-cover rounded-md group-hover:scale-105 transition-all ${
            isLoading ? "hidden" : "group-hover:scale-105"
          }`}
          onLoad={() => setIsLoading(false)}
        />
        <p className="absolute top-0 right-0 bg-white/60 text-black capitalize text-[10px] md:text-[12px] font-bold px-2 md:px-4 md:py-1 rounded-md">
          {movie.Type}
        </p>
      </div>

      <div>
        <h4 className="text-center text-[12px] md:text-[16px] font-bold mt-2">
          {movie.Title} ({movie.Year})
        </h4>
      </div>
    </div>
  );
};

export default MovieList;
