import {useState, useEffect} from 'react';
import axios from 'axios';

const Row = ({title, fetchUrl}) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(fetchUrl).then((response) => {
            setMovies(response.data.results)
        })
    },[fetchUrl])
    
    console.log(movies)
  return (
    <>
      <h1 className='text-md text-xl font-semibold text-white px-3 py-5'>{title}</h1>
      <div className="flex items-center relative">
        <div id="slider">
          {
            movies.map((movie) => {
              return <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] xl:w-[320px] inline-block relative cursor-pointer p-2'>
                  <img className='text-white w-full h-auto block
                  ' src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`} alt={movie?.title} />

                  <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                    <p className="white-space-normal flex justify-center items-center h-full text-xs font-bold md:text-sm">{movie?.title}</p>
                  </div>
              </div>
            })
          }
        </div>
      </div>
    </>
  )
}

export default Row
