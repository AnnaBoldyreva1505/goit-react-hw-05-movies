import React from 'react';
import { useEffect, useState } from 'react';
// import { useLocation, Link } from 'react-router-dom';
import { fetchMovies } from '../../api';
import MovieList from '../../components/MovieList/MovieList.js';
import { Title } from './Home.styled';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMoviesHome = async () => {
      try {
        const response = await fetchMovies();
        setMovies(response.data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMoviesHome();
  }, []);

  return (
    <>
      <Title>Trending Movies Today</Title>
      <MovieList movies={movies} />
    </>
  );
};

export default Home;
