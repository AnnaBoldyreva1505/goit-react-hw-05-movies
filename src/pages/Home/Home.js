import React from 'react';
import { useEffect, useState } from 'react';
import { fetchMovies } from '../../api';
import {
  Title,
  OtherFilmsContainer,
  OtherFilmsList,
  OtherFilmsItem,
  OtherFilmsImage,
  OtherFilmsRating,
} from './Home.styled';

export const Home = () => {
  //   const [movies, setMovies] = useState([]);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMoviesHome = async () => {
      try {
        const response = await fetchMovies();
        setMovies(response.data.results);
      } catch (error) {
        console.error('Произошла ошибка при получении данных:', error);
      } finally {
        console.log('Запрос завершен');
      }
    };
    fetchMoviesHome();
  }, []);

  console.log(movies);

  return (
    <>
      <Title>Trending Movies Today</Title>
      <OtherFilmsContainer>
        <OtherFilmsList>
          {movies.map(({ title, id, poster_path, vote_average }) => {
            return (
              <OtherFilmsItem key={id}>
                <OtherFilmsImage
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={title}
                  // width="200"
                />
                <OtherFilmsRating>
                  {parseFloat(vote_average.toFixed(1))}
                </OtherFilmsRating>
              </OtherFilmsItem>
            );
          })}
        </OtherFilmsList>
      </OtherFilmsContainer>
    </>
  );
};

export default Home;
