import { useLocation, Link } from 'react-router-dom';
import img from '../../Images/No-Image-Placeholder.svg.png';

import {
  FilmsItem,
  FilmsImage,
  FilmsTitle,
  FilmsList,
  OtherFilmsRating,
} from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <FilmsList>
        {movies.map(({ title, id, poster_path, vote_average }) => {
          return (
            <FilmsItem key={id}>
              <Link to={`/movies/${id.toString()}`} state={{ from: location }}>
                <FilmsImage
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500${poster_path}`
                      : { img }
                  }
                  alt={title}
                  width="130"
                />
                <OtherFilmsRating>
                  {parseFloat(vote_average.toFixed(1))}
                </OtherFilmsRating>
                <FilmsTitle>
                  <strong>{title}</strong>
                </FilmsTitle>
              </Link>
            </FilmsItem>
          );
        })}
      </FilmsList>
    </div>
  );
};

export default MovieList;
