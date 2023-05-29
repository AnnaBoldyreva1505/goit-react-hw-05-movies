// const API_Key = 'b6e9665514428b2c0f9442130a42f46a';
// const BASE_URL = 'https://api.themoviedb.org/3/movie/';

// // Documentation: https://developers.themoviedb.org/3/getting-started/introduction


import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = 'b6e9665514428b2c0f9442130a42f46a';

export const fetchMovies = () => {
  return axios('trending/movie/day', {
    params: {
      api_key: API_KEY,
    },
  });

};

export const fetchForMoviesPage = (query) => {
  return axios(`search/movie?&query=${query}`, {
    params: {
      api_key: API_KEY,
    },
  });

};

export const fetchForMoviesDetalis = (movieId) => {
  return axios(`movie/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
  });

};





// /trending/get-trending список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// /search/search-movies поиск кинофильма по ключевому слову на странице фильмов.
// /movies/get-movie-details запрос полной информации о фильме для страницы кинофильма.
// /movies/get-movie-credits запрос информации о актёрском составе для страницы кинофильма.
// /movies/get-movie-reviews запрос обзоров для страницы кинофильма.