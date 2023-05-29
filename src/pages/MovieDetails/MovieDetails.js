import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchForMoviesDetalis } from '../../api';
import {
  ImgContainer,
  AboutFilm,
  Container,
  ButtonGoToBack,
  Title,
  Raiting,
  H3, 
  Ul,
  Li,
  StyledLink,
} from './MovieDetails.styled';
const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieId = async () => {
      try {
        const response = await fetchForMoviesDetalis(movieId);
        setMovie(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovieId();
  }, [movieId]);

  const { overview, title, genres = [], vote_average, poster_path } = movie;
  console.log(vote_average);
  return (
    <>
      <ButtonGoToBack
        onClick={() => {
          navigate(location?.state?.from ?? '/');
        }}
      >
        ← Go to back
      </ButtonGoToBack>
      <Container>
        <ImgContainer>
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt="{title}"
            width="300"
          />
        </ImgContainer>
        <AboutFilm>
          <Title>{title}</Title>
          <Raiting>{vote_average}</Raiting>
          <H3>Overview:</H3>
          <p>{overview} </p>
          <H3 >Genres: </H3>
          <p>
            {genres.map(({ id, name }) => (
              <li key={id}>• {name}</li>
            ))}
          </p>
          <div>
            <H3>Additional information:</H3>

            <Ul>
              <Li>
              <StyledLink to="/">Cast</StyledLink>
              </Li>
              <Li>
              <StyledLink to="/">Reviews</StyledLink>
              </Li>
            </Ul>
          </div>
        </AboutFilm>
      </Container>
    </>
  );
};

export default MovieDetails;
