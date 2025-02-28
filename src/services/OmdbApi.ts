import axios from "axios";

const movieNames = ["barbie", "batman", "redone"];

const getRandomMovie = (namesArray: string[]): string => {
  return namesArray[Math.floor(Math.random() * namesArray.length)];
};

const getRandomMovieValue = getRandomMovie(movieNames);

const api_key = import.meta.env.VITE_API_KEY;

const omdbURL = `https://www.omdbapi.com/?apikey=${api_key}&`;

const getPoster = axios.get(omdbURL + getRandomMovieValue);

const getMovieBySearch = (param: string) => axios.get(omdbURL + param);

export default {
  getPoster,
  getMovieBySearch,
  getRandomMovieValue,
};
