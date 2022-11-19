import React from "react";
import "./Banner.css";

export default function Banner() {
  return (
    <header className="banner">
      <div className="banner-contents">
        <h2 className="banner-title">Welcome.</h2>
        <h3 className="banner-description">
          Millions of movies, TV shows and people to discover. Explore now.
        </h3>

        <form className="inner-search-form">
          <input
            className="input-text"
            type="text"
            placeholder="Search for a movie, tv show, person......"
          />
          <input className="input-submit" type="submit" value="Search" />
        </form>
      </div>
    </header>
  );
}
