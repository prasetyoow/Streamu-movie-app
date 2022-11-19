import React from "react";
import "./Movies.css";
import axios from "../../helpers/axios";

export default function Movies({ title, fetchUrl }) {
  const [movies, setMovies] = React.useState([]);

  const imageBaseUrl = "https://image.tmdb.org/t/p/original";

  React.useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);
  return (
    <div className="movies">
      <div className="category-flex">
        <h2 className="category-title">{title}</h2>
        <div className="category-buttons">
          <button>Streaming</button>
          <button>For Rent</button>
          <button>In Theaters</button>
        </div>
      </div>

      <div className="row-posters">
        {/* several posters and mapping*/}
        {movies.map((movie) => {
          return (
            <>
              <div key={movies.id} className="each-movie-box">
                <img
                  className="row-poster"
                  src={`${imageBaseUrl}` + movie.backdrop_path}
                  alt="movie-name"
                />
                <div className="row-poster-content">
                  <h2 className="movie-title">
                    {movie?.title ||
                      movie?.original_title ||
                      movie?.name ||
                      movie?.original_name}
                  </h2>
                  <p className="movie-date">
                    {movie?.first_air_date || movie?.release_date}
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
