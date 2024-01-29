import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../request";
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
  console.log("Api İsteği", movie);

  return (
    <div className="Banner relative h-[56.25.vw]">
      <img
        src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
        alt=""
      />
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16 content">
        <h1 className=" text-white text-1xl md:text-5xl lg:text-6xl h-full w-[50%] font-bold drop-shadow-xl ">
          {movie?.title}
        </h1>
        <p className=" text-white mt-4">{movie?.overview}</p>
      </div>
    </div>
  );
}

export default Banner;
