import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { fetchMovies } from '../../api';
import img from '../../Images/No-Image-Placeholder.svg.png';
import {
  Title,
  OtherFilmsContainer,
  OtherFilmsList,
  OtherFilmsItem,
  OtherFilmsImage,
  OtherFilmsRating,
  OtherFilmsTitle,
} from './Home.styled';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

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

  return (
    <>
      <Title>Trending Movies Today</Title>
      <OtherFilmsContainer>
        <OtherFilmsList>
          {movies.map(({ title, id, poster_path, vote_average }) => {
            return (
              <OtherFilmsItem key={id}>
                <Link to={`movies/${id}`} state={{ from: location }}>
                  <OtherFilmsTitle>
                    <strong>{title}</strong>
                  </OtherFilmsTitle>

                  {(poster_path && (
                    <OtherFilmsImage
                      src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                      alt={title}
                    />
                  )) || <OtherFilmsImage src={img} alt={title} />}

                  <OtherFilmsRating>
                    {parseFloat(vote_average.toFixed(1))}
                  </OtherFilmsRating>
                </Link>
              </OtherFilmsItem>
            );
          })}
        </OtherFilmsList>
      </OtherFilmsContainer>
    </>
  );
};

export default Home;
