import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import Home from '../pages/Home/Home'

export const App = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
          <Route path="movies" element={<div>Kuku</div>} />
          {/* <Route path="cats/:breedId" element={<CatDetails />} /> */}
        </Route>
        <Route path="*" element={<div>Page not found</div>} />
      </Routes> 

    </>
  );
};
