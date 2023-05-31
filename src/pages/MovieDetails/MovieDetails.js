import { useLocation, useNavigate, useParams, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchForMoviesDetalis } from '../../api';
import img from '../../Images/No-Image-Placeholder.svg.png';
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
  AdditionalInfoContainer,
  Info,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieId = async () => {
      try {
        const response = await fetchForMoviesDetalis(movieId);
        setMovie(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovieId();
  }, [movieId]);

  const { overview, title, genres = [], vote_average, poster_path } = movie;
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

      
      {(poster_path && (
                <ImgContainer>
                <img
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt="{title}"
                  width="300"
                /> </ImgContainer>
              )) || <ImgContainer><img src={img} alt={title} width='300' /></ImgContainer>}

        
        <AboutFilm>
          <Title>{title}</Title>
          <Raiting>{vote_average}</Raiting>
          <H3>Overview:</H3>
          <p>{overview} </p>
          <H3>Genres: </H3>
          <p>
            {genres.map(({ id, name }) => (
              <li key={id}>• {name}</li>
            ))}
          </p>
        </AboutFilm>
        <AdditionalInfoContainer>
          <Info>Additional information:</Info>

          <Ul>
            <Li>
              <StyledLink to="cast">Cast</StyledLink>
            </Li>
            <Li>
              <StyledLink to="reviews">Reviews</StyledLink>
            </Li>
          </Ul>
          <Outlet />
        </AdditionalInfoContainer>
      </Container>
    </>
  );
};

export default MovieDetails;
