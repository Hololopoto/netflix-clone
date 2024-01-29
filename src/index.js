import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import Row from "./Row/Row";
import requests from "./request";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Banner />
    <Row
      title="Netflix Originals"
      fetchUrl={requests.fetchNetflixOriginals}
      topFlex
    />
  </React.StrictMode>
);
