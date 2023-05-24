import { Routes, Route, NavLink } from 'react-router-dom';
import { AppBar } from './AppBar';

export const App = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="cats" element={<Cats />} />
          <Route path="cats/:breedId" element={<CatDetails />} />
        </Route>
        <Route path="*" element={<div>Page not found</div>} />
      </Routes> 
    </>
  );
};

// /trending/get-trending список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// /search/search-movies поиск кинофильма по ключевому слову на странице фильмов.
// /movies/get-movie-details запрос полной информации о фильме для страницы кинофильма.
// /movies/get-movie-credits запрос информации о актёрском составе для страницы кинофильма.
// /movies/get-movie-reviews запрос обзоров для страницы кинофильма.
