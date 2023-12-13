import { useEffect, useState } from 'react';

import { useSearchParams, useLocation } from 'react-router-dom';

import { getSerchMovies } from 'api/api';

import { Link } from 'react-router-dom';

import styles from './Movies.module.css';

import { toast } from 'react-toastify';



const Movies = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  const [searchFilm, setSearchFilm] = useState([]);

  const location = useLocation();

  const onSubmit = evt => {
    evt.preventDefault();

    if (evt.target.query.value === '') {
      toast.error('Please enter a movie name');

      return;
    }

    setSearchParams({ query: evt.target.query.value });
    evt.target.query.value = '';
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    getSerchMovies(query).then(setSearchFilm);
  }, [query, searchParams, setSearchFilm]);

  return (
    <>
      <form onSubmit={onSubmit} className={styles.form}>
        <input type="text" name="query" />
        <button type="submit">Search a movie</button>
      </form>

      <hr />

      <>
        {' '}
        {searchFilm.length ? (
          <ul className={styles.filmList}>
            {searchFilm.map(el => {
              return (
                <li key={el.id} className={styles.filmListItem}>
                  <Link state={{ from: location }} to={`/goit-react-hw-05-movies/movies/${el.id}`}>
                    <img
                      width="400"
                      height="auto"
                      src={
                        el.poster_path
                          ? `https://image.tmdb.org/t/p/w500${el.poster_path}`
                          : `https://wallpapers.com/images/hd/funny-memes-picture-y1b50hessb0q1vzr.jpg`
                      }
                      alt={el.name}
                    />

                    <p>{el.title ? el.title : el.name}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : (
          <h3>Please, search a movie</h3>
        )}
      </>
    </>
  );
};

export default Movies;