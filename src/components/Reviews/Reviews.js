import { fetchReviews } from '../../api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ReviewContainer, Span } from './Reviews.styled';
const Reviews = () => {
  const [reviews, setReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieReview = async () => {
      try {
        const response = await fetchReviews(movieId);
        setReview(response.data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovieReview();
  }, [movieId]);

  return (
    <div>

{reviews && reviews.length> 0 ? (<ReviewContainer>
        {reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              {(author && (
                <div>
                  <p>
                    Author: <Span>{author}</Span>
                  </p>
                  <p>{content}</p>
                </div>
              )) || <p>No data</p>}
            </li>
          );
        })}
      </ReviewContainer>) : (<p>We don't have any reviews for this Movie</p>)}



      
    </div>
  );
};

export default Reviews;
