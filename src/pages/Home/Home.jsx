import { Link } from 'react-router-dom';

import { fetchTrends } from 'api/api';

import { useState, useEffect } from 'react';

import styles from './Home.module.css';





const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrends().then(setMovies);
  }, []);

  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.headerText}>Welcome to Czi Cinema</h1>
      </div>
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
    </>
  );
};

export default Home;