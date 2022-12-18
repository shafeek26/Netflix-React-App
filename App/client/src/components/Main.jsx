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
  // console.log(movie);

  const truncateString = (str , num) => {
    if(str?.length > num){
      return str.slice(0, num) + '...' ;
    }else{
      return str;
    }
  }
  return (
    <div className="w-full h-[600px]">
      <div className="w-full h-full">
        <div className="w-full h-[600px] absolute bg-gradient-to-r from-stone-800"></div>
        <img
          className="w-full h-full bg-cover object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
      </div>
      <div className="absolute top-[30%] p-4 md:p-8">
        <h1 className="text-2xl capitalize text-white font-semibold py-3">
          {movie?.title}
        </h1>
        <div className="space-x-3">
          <button className="bg-white text-black py-1 px-4">Play</button>
          <button className=" border border-white text-white py-1 px-4 capitalize">
            watch later
          </button>
        </div>
        <p className="text-gray-400 text-xs py-3">
          Realeased: {movie?.release_date}
        </p>
        <p  className="text-white text-md w-[80%]
          md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]">
          {truncateString(movie?.overview, 150)}
        </p>
      </div>
    </div>
  );
};

export default Main;
