import React, { lazy, Suspense } from 'react';
import {Routes, Route } from 'react-router-dom';
import {Navigation} from './components/Navigation/Navigation';
import styles from './App.module.css'


const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./components/Cast/Cast'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

export const App = () => {
  return (
    <div className={styles.container}>
      <Navigation/>
      <Suspense fallback={<div className={styles.loader}>Loading...</div>}>
        <Routes>
          <Route path="/czicinema-movies/" element={<Home />} />
          <Route path="/czicinema-movies/movies" element={<Movies/>} />
          <Route path="/czicinema-movies/movies/:movieId" element={<MovieDetails />}> 
            <Route path='Cast' element={<Cast />}/>
            <Route path='Reviews' element={<Reviews />}/>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
  </div>
  );
};

export default App;
