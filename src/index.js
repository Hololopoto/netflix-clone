import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import Row from "./Row/Row";
import requests from "./request";
import Footer from "./Footer/Footer";

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
    <Row title="Science Fiction" fetchUrl={requests.fetchScienceFiction} />
    <Row title="Today's Most Viewed" fetchUrl={requests.fetchTrending} />
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
    <Row title="Comedies" fetchUrl={requests.fetchComedyMovies} />
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
    <Row title="Crime Movies" fetchUrl={requests.fetchCrimeMovies} />
    <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    <Row title="Romantic" fetchUrl={requests.fetchRomanceMovies} />
    <Footer />
  </React.StrictMode>
);
