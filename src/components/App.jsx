import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import Home from '../pages/Home/Home'
import Movies from 'pages/Movies/Movies';

export const App = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
          <Route path="movies" element={<Movies/>} />
        </Route>
        <Route path="*" element={<div>Page not found</div>} />
      </Routes> 

    </>
  );
};
