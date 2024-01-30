import React, { useEffect, useState } from "react";
import axios from "../axios";
import "./Row.css";
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
    <div className="List-Group  ">
      <h2 className="text-white text-3xl -my-8 pl-10">{title}</h2>

      <div className="flex flex-row overflow-hidden relative scroll-smooth gap-3 w-full">
        <button
          onClick={scroolMovieForLeftButton}
          className="z-50 w-10 pl-3 bg-black my-20  w-[100px] bg-opacity-60 text-white sticky grid items-center justify-items-center left-0">
          <AiOutlineArrowLeft className="mr-3" />
        </button>
        {movies.map((movie, index) => (
          <div
            className="List-Item relative flex  flex-row"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}>
            (
            <div className="movies_poster transition z-0 my-10 py-10 cursor-pointer lg:w-[240px] md:w-[140px] flex flex-row">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
              />
            </div>
            )
            <div
              className={`infos opacity-0 absolute  z-40 top-0 transition ${
                hovered === index && "opacity-100"
              }`}>
              <div className="info grid  items-center z-10 cursor-pointer transition lg:w-[450px] md:w-[340px] flex flex-row">
                <img
                  className="moviePoster"
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  alt=""
                />
              </div>
              <div className="infos-text bg-neutral-700 w-full   flex flex-col ">
                <div className="rate text-white flex flex-row mx-4 place-content-between items-center">
                  <div className="name  text-2xl">
                    {movie?.title || movie?.name || movie?.original_name}
                  </div>

                  <div className="dates text-white">
                    <div className="date">
                      <h5>{movie.release_date || movie.first_air_date}</h5>
                    </div>
                  </div>

                  <span className="flex items-center   flex-row">
                    <AiFillStar className="fill-yellow-400" />
                    {movie.vote_average}
                  </span>
                </div>
                <hr className="w-[90%] mx-auto mt-3" />
                <div className="descript lg:block sm:hidden  text-white  mt-2 mx-6">
                  <p className="line-clamp-4">{movie.overview}</p>
                </div>
                <hr className="w-[90%] mx-auto my-2" />
                <div className="genre w-full bg-neutral-700 text-white pl-4 pb-5 bg flex flex-end flex-row gap-7">
                  {movie.genre_ids?.map((genre_id) => (
                    <p>
                      {genre_id === 28
                        ? "Action"
                        : genre_id === 12
                        ? "Adventure"
                        : genre_id === 16
                        ? "Animation"
                        : genre_id === 35
                        ? "Comedy"
                        : genre_id === 80
                        ? "Crime"
                        : genre_id === 99
                        ? "Documentary"
                        : genre_id === 18
                        ? "Drama"
                        : genre_id === 10751
                        ? "Family"
                        : genre_id === 14
                        ? "Fantasy"
                        : genre_id === 36
                        ? "History"
                        : ""}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={scroolMovieForRightButton}
          className="z-50 text-xl  bg-black pr-3 my-20 w-full bg-opacity-60 text-white sticky grid items-center justify-items-center right-0">
          <AiOutlineArrowRight className="ml-3" />
        </button>
      </div>
    </div>
  );
}

export default Row;
