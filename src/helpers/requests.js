const API_KEY = "a6c21d3477de7ccf4d15369ec819e096"

const requests = {
  searchMoviesByTitle: `search/movie?api_key=${API_KEY}&query=the+avengers&page=1&include_adult=false`,
  getAllMovies: `/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&language=en-US`,
  getMoviesPopular: `/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&language=en-US`,
  getMoviesFree: `discover/movie?api_key=${API_KEY}&with_genres=16`,
  getMoviesTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
}

export default requests;