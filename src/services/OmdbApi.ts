import axios from "axios";

// const movieNames = ["barbie", "batman", "redone"];

// const getRandomMovie = (namesArray: string[]): string => {
//   return namesArray[Math.floor(Math.random() * namesArray.length)];
// };

// const getRandomMovieValue = getRandomMovie(movieNames);

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

const movieUrl = `${BASE_URL}?apikey=${API_KEY}`;


const handleError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    console.error("API Error:", error.response?.data || error.message);
  } else {
    console.error("Unexpected Error:", error);
  }
  throw error;
};

// **Fetch movies by search query**
export const searchMovies = async (query: string) => {
  try {
    const response = await axios.get(
      `${movieUrl}&s=${encodeURIComponent(query)}`
    );

    if (!response.data) {
      throw new Error("No movies found");
    }

    return response.data; // Returns an array of movies
  } catch (error) {
    handleError(error);
  }
};

// **Fetch movie details by IMDb ID**
export const getMovieDetails = async (imdbID: string) => {
  try {
    const response = await axios.get(
      `${movieUrl}&i=${encodeURIComponent(imdbID)}`
    );

    if (!response.data) {
      throw new Error("Something is wrong somewhere, no movie detail found");
    }

    return response.data; // Returns an array of movies
  } catch (error) {
    handleError(error);
  }
};

