import React, { useEffect, useState } from "react";
import axios from "../axios";
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

  //   movies.map();
  return (
    <div className="List-Group">
      <h2 className="text-white">{title}</h2>
      <div className="List-Item">
        <div className="movies_poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${movies?.poster_path}`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Row;
