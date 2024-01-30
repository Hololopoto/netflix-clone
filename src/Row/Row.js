import React, { useEffect, useState } from "react";
import axios from "../axios";
import {
  AiFillStar,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
} from "react-icons/ai";

import requests from "../request";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  //   const photo_base_URL = "https://image.tmdb.org/t/p/w500";
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

  //   movies.map();
  return (
    <div className="List-Group overflow-hidden ">
      <h2 className="text-white text-xl m-4 pl-4">{title}</h2>
      <div className=" flex flex-row  overflow-hidden  relative scroll-smooth  gap-3 w-full">
        <button
          onClick={scroolMovieForLeftButton}
          className="z-10 w-10 pl-3 bg-black m w-[100px] bg-opacity-60 text-white sticky grid items-center justify-items-center left-0">
          <AiOutlineArrowLeft className="mr-3" />
        </button>
        {movies.map((movie) => (
          <div className="List-Item  flex flex-row">
            <div className="movies_poster lg:w-[220px] md:w-[140px]   flex flex-row">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
              />
            </div>
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
