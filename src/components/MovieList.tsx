import { useNavigate } from "react-router-dom";

interface MovieProps {
  movie: {
    Title: string;
    Year: string;
    Poster: string;
    Plot: string;
    Director: string;
    Actors: string;
    imdbRating: string;
    Released?: string;
    imdbID: string
  };
}

const MovieList = ({ movie }: MovieProps) => {
  const navigate = useNavigate();

  const handleMovieClick = (id: string) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div
      className="p-1 border rounded shadow cursor-pointer"
      onClick={() => handleMovieClick(movie.imdbID)}
    >
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
