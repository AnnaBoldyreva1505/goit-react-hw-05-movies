import { fetchForMoviesPage } from '../../api.js';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { MdMovieFilter } from 'react-icons/md';
import { Loader } from 'components/Loader/Loader.js';
import MovieList from '../../components/MovieList/MovieList.js';
import { useSearchParams } from 'react-router-dom';

import {
  SearchbarWrapper,
  SearchForm,
  SearchFormButton,
  SearchFormButtonInput,
  Span,
} from './Movies.styled.js';

const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('searchQuery');

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      searchQuery: '',
    },
  });

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    const getMovies = async searchQuery => {
      setIsLoading(true);
      try {
        const response = await fetchForMoviesPage(searchQuery);
        if (response.data.results.length === 0) {
          toast.error(
            'Sorry, there are no movies matching your search query. Please try again.'
          );
          return;
        }
        setMovies([...response.data.results]);
        setError('');
      } catch (error) {
        setError({ error });
      } finally {
        setIsLoading(false);
      }
    };

    getMovies(searchQuery);
  }, [searchQuery]);

  const onSubmit = data => {
    setSearchParams({ searchQuery: data.searchQuery.trim() });
    reset();
  };

  return (
    <>
      {error && <p>ERROR!</p>}
      <SearchbarWrapper>
        <SearchForm onSubmit={handleSubmit(onSubmit)}>
          <SearchFormButtonInput
            {...register('searchQuery')}
            placeholder="Search movies"
          />
          <SearchFormButton type="submit" name="searchQuery">
            <Span>
              <MdMovieFilter size="2em" fill="#f50057" />
            </Span>
          </SearchFormButton>
          <Toaster />
        </SearchForm>
      </SearchbarWrapper>

      {isLoading && <Loader />}
      <MovieList movies={movies} />
    </>
  );
};

export default Movies;
