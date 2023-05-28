// import { useState } from 'react';
import PropTypes from 'prop-types';
import { BsFillSearchHeartFill } from 'react-icons/bs';
import {
  SearchbarWrapper,
  SearchForm,
  SearchFormButton,
  SearchFormButtonInput,
  Span,
  FilmsList,
  FilmsItem,
  FilmsImage,
  FilmsTitle,
} from './SearchBar.styled.js';
// import toast from 'react-hot-toast';
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { fetchForMoviesPage } from '../../api.js';
import img from '../../Images/No-Image-Placeholder.svg.png';

export const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [movies, setMovies] = useState([]);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      searchQuery: '',
    },
  });

  console.log(searchQuery);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    const getMovies = async searchQuery => {
      setIsLoading(true);
      try {
        const response = await fetchForMoviesPage(searchQuery);
        console.log(response);
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
    setSearchQuery(data.searchQuery);
    // fetchForMoviesPage(data.searchQuery);
    reset();
  };

  return (
    <>
      <SearchbarWrapper>
        <SearchForm onSubmit={handleSubmit(onSubmit)}>
          <SearchFormButtonInput {...register('searchQuery')} placeholder='Search movies' />
          <SearchFormButton type="submit" name="searchQuery">
            <Span>
              <BsFillSearchHeartFill size="2em" fill="#9c27b0" />
            </Span>
          </SearchFormButton>
          <Toaster />
        </SearchForm>
      </SearchbarWrapper>
      <FilmsList>
        {movies.map(({ title, id, poster_path}) => {
          return (
            <FilmsItem key={id}>

              {(poster_path && (
                <FilmsImage
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={title}
                  width="130"
                />
              )) || <FilmsImage src={img} alt={title}  />}
                            <FilmsTitle>
                <strong>{title}</strong>
              </FilmsTitle>
            </FilmsItem>
          );
        })}
        
      </FilmsList>
    </>
  );
};
