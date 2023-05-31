import { fetchCast } from '../../api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CardContainer, Card, CardText, CardImage } from './Cast.styled.';
import img from '../../Images/default-img-avatar.jpg';
const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const response = await fetchCast(movieId);
        setCast(response.data.cast);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovieCast();
  }, [movieId]);

  return (
    <div>
      {cast && cast.length > 0 ? (
        <CardContainer>
          {cast.map(({ id, character, name, profile_path }) => {
            return (
              <Card key={id}>
                {(profile_path && (
                  <CardImage
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                    alt={name}
                  />
                )) || <CardImage src={img} alt={name} />}

                <CardText>Name: {name}</CardText>
                <CardText>Character: {character}</CardText>
              </Card>
            );
          })}
        </CardContainer>
      ) : (
        <p>We don't have any Information about cast for this Movie</p>
      )}
    </div>
  );
};

export default Cast;
