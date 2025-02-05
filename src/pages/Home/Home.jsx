import { Link } from 'react-router-dom';

import { fetchTrends, getMovieTrailers } from 'api/api';

import { useState, useEffect } from 'react';

import UpcomingMovies from 'components/UpcomingMovies/UpcomingMovies';

import styles from './Home.module.css';





const Home = () => {
  const [movies, setMovies] = useState([]);
  const [trailers, setTrailers] = useState([]);

  useEffect(() => {
    fetchTrends().then(setMovies);
  }, []);

  useEffect(() => {
    fetchTrends().then(async moviesData => {
      setMovies(moviesData);


      const trailersData = await Promise.all(
        moviesData.slice(0, 10).map(async movie => {
          const trailer = await getMovieTrailers(movie.id);
          return trailer.length ? trailer[0] : null;
        })
      );

      setTrailers(trailersData.filter(trailer => trailer)); 
    });
  }, []);

  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.headerText}>Welcome to Czi Cinema</h1>
      </div>


      <UpcomingMovies />

      <ul className={styles.filmList}>

      </ul>
      
      <ul className={styles.filmList}>
        {movies.map(({ id, title, name, poster_path }) => {
          return (
            <li key={id} className={styles.filmListItem}>
              <Link className={styles.homeMovieItem} to={`/czicinema-movies/movies/${id}`}>
                <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w300${poster_path}`
                      : 'https://imageio.forbes.com/blogs-images/forbespr/files/2017/10/1010_forbes-400-trump-11-14-2017-cover_768x1005.jpg?format=jpg&width=1440'
                  }
                  alt={title}
                />

                <p>{title ? title : name}</p>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className={styles.trailerContainer}>
        {trailers.map((trailer, index) => (
          <iframe
            key={index}
            className={styles.trailer}
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title="Movie Trailer"
            allowFullScreen
          ></iframe>
        ))}
      </div>

    </>
  );
};

export default Home;