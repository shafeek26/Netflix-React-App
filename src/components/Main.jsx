/** @format */

import { useState, useEffect } from "react";
import requests from "../Request";
import axios from "axios";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];
  // making API calls using axios
  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  console.log(movie);
  return (
    <div className="w-full h-[650px]">
      <div className="w-full h-full">
        <div className="w-full h-[650px] absolute bg-gradient-to-r from-stone-800"></div>
        <img
          className="w-full h-full bg-cover object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
      </div>
      <div className="absolute top-[30%] ml-5 flex flex-col w-1/2">
        <h1 className="text-2xl capitalize text-white font-semibold py-3">
          {movie?.title}
        </h1>
        <div className="space-x-3">
          <button className="bg-white text-black py-1 px-4">Play</button>
          <button className=" border border-white text-white py-1 px-4 capitalize">
            watch later
          </button>
        </div>
        <span className="text-gray-400 text-xs py-3">
          Realeased {movie?.release_date}
        </span>
        <p className="text-white text-md sm:w-[50%] md:w-[70%] lg:w-[80%] xl:w-[100%]">
            {movie?.overview}
        </p>
      </div>
    </div>
  );
};

export default Main;
