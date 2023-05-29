import { fetchCast } from '../../api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  console.log(cast)

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
        <ul>
          {cast.map(({ id, character, name, profile_path }) => {
            return (
              <li key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                  width="200"
                />
               <p>Name: {name}</p>
               <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      </div>

)



};

export default Cast;

