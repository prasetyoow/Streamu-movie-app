import React from 'react'
import "./AllMovies.css"
import axios from "../../helpers/axios"
import requests from '../../helpers/requests';

export default function AllMovies() {

  const [movies, setMovies] = React.useState([]);

  console.log(movies)

  const imageBaseUrl = "https://image.tmdb.org/t/p/original";

  React.useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.getAllMovies);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, []);

  return (
    <div>
      <div className='title'>
        <h2>Movies</h2>
      </div>

      <div className="row-posters-all">
        {/* several posters and mapping*/}
        {movies.map((movie) => {
          return (
            <>
              <div key={movies.id} className="each-movie-box">
                <img
                  className="row-poster-all"
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
  )
}
