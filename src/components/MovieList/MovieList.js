import { ReviewContainer, Span } from './MovieList.styled';
const MovieList = ({movies}) => {

  

  return (
    <div>

        <ReviewContainer>
          {movies.map(({ id, author, content }) => {
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
        </ReviewContainer>
    
    </div>
  );
};

export default MovieList;
