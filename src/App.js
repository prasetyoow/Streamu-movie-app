import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import AllMovies from "./components/AllMovies/AllMovies";
import Movies from "./components/Movies/Movies";
import Advertise from "./components/Advertise/Advertise";
import Footer from "./components/Footer/Footer";

import requests from "./helpers/requests";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <AllMovies />
      <Movies title="What's Popular" fetchUrl={requests.getMoviesPopular} />
      <Movies title="Free to Watch" fetchUrl={requests.getMoviesFree} />
      <Movies title="Trending" fetchUrl={requests.getMoviesTrending} />
      <Advertise />
      <Footer />
    </div>
  )
}