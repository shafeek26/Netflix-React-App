/** @format */

import { useState, useEffect } from "react";
import Movie from "./Movie";
import axios from "axios";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Row = ({ title, fetchUrl, rowId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchUrl]);

  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  }
  const slideRight = () => {
    var slider = document.getElementById('slider' + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  }
  return (
    <>
      <h1 className="text-md md:text-xl font-semibold text-white px-3 py-5">
        {title}
      </h1>
      <div className="flex items-center relative group">
        <MdChevronLeft onClick={slideLeft} className="bg-white rounded-full absolute left-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40} />
        <div id={"slider" + rowId} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
          {movies.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
        <MdChevronRight onClick={slideRight} className="bg-white rounded-full absolute right-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40}/>
      </div>
    </>
  );
};

export default Row;
