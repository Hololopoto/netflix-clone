import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../request";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

function Banner() {
  const [movie, setMovie] = useState([]);
  // const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <div className="Banner mb-20 relative h-[56.25.vw]">
      <img
        src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
        alt=""
      />
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16 content">
        <h1 className=" text-white text-1xl md:text-5xl lg:text-6xl h-full w-3/5 font-bold drop-shadow-xl ">
          {movie?.title?.toUpperCase() ||
            movie?.name?.toUpperCase() ||
            movie?.original_name?.toUpperCase()}
        </h1>
        <p className="  text-white text-[8px] md:text-lg  mt-3 md:mt-8   w-[90%] md:w-[80%] lg:w-[50%]">
          {movie?.overview}
        </p>
        <div className="banner_button flex flex-row items-center mt-3 md:mt-4 gap-3">
          <button className="text-dark flex flex-row  text-xs lg:text-lg bg-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto font-semibold items-center hover:bg-slate-300 transition gap-2  ">
            <FaPlay />
            Play
          </button>
          <button className="text-white flex flex-row text-xs lg:text-lg bg-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto font-semibold items-center hover:bg-opacity-20 gap-2  ">
            <IoIosInformationCircleOutline />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
