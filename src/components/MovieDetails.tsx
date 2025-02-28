
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services/OmdbApi";
import MovieDetail from "./MovieDetail";
import { Loader } from "./Loader";
import Error from "./Error";

const MovieDetails = () => {
  const { id } = useParams(); // Get the movie ID from URL
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await getMovieDetails(id!);
        if (data) {
          setMovie(data);
        } else {
          setError("Movie not found.");
        }
      } catch {
        setError("Failed to load movie details.");
      }
    };
    fetchMovie();
  }, [id]);

  if (error) return <Error error={error} />;
  if (!movie) return <Loader />;

  return (
    <MovieDetail movie={movie} />
  );
};

export default MovieDetails;
