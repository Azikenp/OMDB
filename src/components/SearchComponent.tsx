import { useState } from "react";
import { searchMovies } from "../services/OmdbApi";
import MovieList from "./MovieList";
import { Loader } from "./Loader";
import {  useMovieContext } from "../context/MovieContext";

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  // const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { movies, setMovies } = useMovieContext();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!query.trim()) {
      setError("Please enter a valid movie name.");
      return;
    }

    setLoading(true); // 👈 Start loading
    setError(""); // Clear errors

    try {
      const results = await searchMovies(query);

      if (results) {
        setMovies(results);
      } else {
        setError("No movies found.");
      }
    } catch {
      setError("Failed to fetch movies. Please try again.");
      setMovies([]);
    } finally {
      setLoading(false); // 👈 Stop loading
    }
  };

  return (
    <div className="px-8 md:px-16 flex flex-col gap-3 md:items-center md:justify-center min-h-[40vh] md:min-h-screen border-b border-gray-500 pb-16">
      <h3 className="font-bold text-[20px] md:text-[26px]">
        Please enter a movie name{" "}
        <span className="hidden md:inline">to begin search</span>
      </h3>

      <form
        onSubmit={handleSearch}
        className="flex items-center justify-center gap-3"
      >
        <input
          className="border border-gray-500 placeholder:text-gray-400 placeholder:text-[12px] w-full md:w-[50vw] p-2 rounded-sm outline-none"
          type="text"
          placeholder="Enter a valid movie name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 px-4 py-2 rounded-md font-bold cursor-pointer hover:bg-blue-600/80 transition-all"
        >
          Search
        </button>
      </form>

      {error && <p className="text-red-500">{error}</p>}

      {/* Display Movie Results */}
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {movies.map((movie, i) => (
            <MovieList key={i} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
