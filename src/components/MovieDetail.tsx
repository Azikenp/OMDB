import { useEffect } from "react";
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
  };
}

const MovieDetail = ({ movie }: MovieProps) => {
  const navigate = useNavigate();
  const { Title, Year, Poster, Plot, Director, Actors, imdbRating, Released } =
    movie;
    
    

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="px-8 md:px-16 flex flex-col gap-5 border-b border-gray-500 pb-16">
      <h2 className="text-2xl font-bold">
        {Title} ({Year})
      </h2>

      <div className="flex flex-col md:flex-row md:pr-80 justify-center md:justify-start gap-6">
        <img
          className="w-68 md:w-64 h-84 rounded-sm object-fit"
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/300"}
          alt={Title}
        />

        <div className="flex flex-col gap-4">
          <p className="text-lg">{Plot}</p>
          <p>
            <strong>Director:</strong> {Director}
          </p>
          <p>
            <strong>Starring:</strong> {Actors}
          </p>
          <p>
            <strong>IMDb Rating:</strong> {imdbRating}
          </p>
          <p>
            <strong>Release Date:</strong> {Released ? Released : Year}
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
