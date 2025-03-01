import { createContext, useState, ReactNode, useContext } from "react";

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
}

interface MovieContextType {
  movies: Movie[];
  setMovies: (movies: Movie[]) => void;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const MovieProvider = ({ children }: { children: ReactNode }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  return (
    <MovieContext.Provider value={{ movies, setMovies }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovieContext must be used within a MovieProvider");
  }
  return context;
};
