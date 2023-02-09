/** @format */
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  const [likes, setLikes] = useState(false);
  const truncateString = (str , num) => {
    if(str?.length > num){
      return str.slice(0, num) + '...' ;
    }else{
      return str;
    }
  }
  return (
    <>
      <Link to="/signup">
        <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] xl:w-[320px] inline-block relative cursor-pointer p-2">
          <img
            className="text-white w-full h-auto block"
            src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
            alt={movie?.title}
          />

          <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
            <p className="white-space-normal flex justify-center items-center h-full text-xs font-bold md:text-sm">
              {truncateString(movie?.title, 30)}
            </p>
            <p>
              {likes ? (
                <FaHeart className="absolute top-4 left-4 text-gray-300" />
              ) : (
                <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
              )}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Movie;
