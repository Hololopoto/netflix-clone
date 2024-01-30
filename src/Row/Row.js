import React, { useEffect, useState } from "react";
import axios from "../axios";
import {
  AiFillStar,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
} from "react-icons/ai";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      console.log(request.data.results);
    };
    fetchData();
  }, [fetchUrl]);

  const scroolMovieForLeftButton = (e) => {
    e.target.parentElement.scrollLeft -= 1000;
  };

  const scroolMovieForRightButton = (e) => {
    e.target.parentElement.scrollLeft += 1000;
  };

  return (
    <div className="List-Group overflow-hidden ">
      <h2 className="text-white text-xl m-4 pl-4">{title}</h2>
      <div className="flex flex-row overflow-hidden relative scroll-smooth gap-3 w-full">
        <button
          onClick={scroolMovieForLeftButton}
          className="z-10 w-10 pl-3 bg-black m w-[100px] bg-opacity-60 text-white sticky grid items-center justify-items-center left-0">
          <AiOutlineArrowLeft className="mr-3" />
        </button>
        {movies.map((movie, index) => (
          <div
            className="List-Item flex flex-row"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}>
            {hovered !== index && (
              <div className="movies_poster transition z-0 cursor-pointer lg:w-[240px] md:w-[140px] flex flex-row">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt=""
                />
              </div>
            )}
            {hovered === index && (
              <div className="infos grid relative items-center ">
                <div className="info grid  items-center z-10 cursor-pointer transition lg:w-[450px] md:w-[340px] flex flex-row">
                  <img
                    className="moviePoster"
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt=""
                  />
                </div>
                <div className="  flex realative flex-col ">
                  <div className="rate text-white flex flex-row mx-4 place-content-between items-center">
                    <div className="name">
                      {movie?.title || movie?.name || movie?.original_name}
                    </div>
                    <span className="flex items-center flex-row">
                      <AiFillStar className="fill-yellow-400" />
                      {movie.vote_average}
                    </span>
                  </div>
                  <div className="descript  text-white line-clamp-4 mt-2 mx-6">
                    {movie.overview}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
        <button
          onClick={scroolMovieForRightButton}
          className="z-10 w-10 bg-black pr-3 w-[40px] bg-opacity-60 text-white sticky grid items-center justify-items-center right-0">
          <AiOutlineArrowRight className="ml-3" />
        </button>
      </div>
    </div>
  );
}

export default Row;
