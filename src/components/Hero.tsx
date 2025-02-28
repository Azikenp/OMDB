import { useEffect, useState } from "react";
import OmdbApi from "../services/OmdbApi";
import { FaImdb } from "react-icons/fa";

const randMovie = OmdbApi.getRandomMovieValue;
const IMAGE_BASE_URL = `http://img.omdbapi.com/?apikey=${
  import.meta.env.VITE_API_KEY
}&${randMovie}`;

console.log(IMAGE_BASE_URL);


const Hero = () => {
  const [poster, setPoster] = useState([]);

  useEffect(() => {
    getPoster();
  }, []);

  const getPoster = () => {
    try {
      OmdbApi.getPoster.then((res) => {
        console.log(res);
        setPoster(res);
      });
    } catch (error) {
      if (error) {
        console.error(error);
        // } else {
        //   console.error("Unexpected error:", error);
      }
    }
  };
  return (
    <section className="relative min-w-full md:h-[390px] mr-5 rounded-md hover:border-[2px] md:hover:border-[4px] border-gray-400 transition-all duration-100 ease-in">
      {/* <img
        src={IMAGE_BASE_URL}
        className="min-w-full h-full object-cover object-left-top rounded-md "
      /> */}
      <div className="absolute left-4 top-12 md:top-16 w-[50%] font-bold">
        <h3 className="text-white text-[14px] md:text-[30px]">
          {poster.Title}
        </h3>

        <div className="flex items-center gap-2 mt-2">
          <FaImdb className="text-[22px] md:text-[30px] bg-yellow-400 text-black" />
          <p className="text-white text-[8px] md:text-[16px]">
            {item.vote_average}
          </p>
        </div>

        <p className="text-[10px] md:text-[16px] mt-2 text-white font-light md:font-normal">
          {item.release_date ? item.release_date : item.first_air_date}
        </p>

        <button className="mt-3 md:mt-5 text-[10px] md:text-[16px] bg-red-900 text-white hover:bg-transparent hover:border-gray-400">
          Watch Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
