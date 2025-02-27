import axios from "axios";

const movieNames = ["Barbie", "Batman", "Red one"];

const getRandomMovie = (namesArray: string[]): string => {
  return namesArray[Math.floor(Math.random() * namesArray.length)];
};

const api_key = import.meta.env.VITE_API_KEY;

const omdbURL = `https://www.omdbapi.com/?apikey=${api_key}&`;

const getPoster = axios.get(omdbURL + getRandomMovie(movieNames));

const getMovieBySearch = (param: string) => axios.get(omdbURL + param);

export default {
  getPoster,
  getMovieBySearch,
};
