
import { fetchReviews } from '../../api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Reviews = () => {
  const [reviews, setReview] = useState([]);
  const { movieId } = useParams();
  console.log(reviews)

  useEffect(() => {
    const fetchMovieReview = async () => {
      try {
        const response = await fetchReviews(movieId);
        setReview(response.data.results);
        console.log(response.data)
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovieReview();
  }, [movieId]);



return (
<div>
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
               <p>{author}</p>
               <p>{content}</p>
              </li>
            );
          })}
        </ul>
      </div>

)



};

export default Reviews;

