import { useEffect, useState } from 'react';

import { useSearchParams, useLocation } from 'react-router-dom';

import { getSerchMovies } from 'api/api';

import { Link } from 'react-router-dom';

import styles from './Movies.module.css';

import { toast } from 'react-toastify';
import { FaSearch } from "react-icons/fa";

const Movies = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  const [searchFilm, setSearchFilm] = useState([]);

  const location = useLocation();

  const onSubmit = evt => {
    evt.preventDefault();

    if (evt.target.query.value === '') {
      toast.error('Please enter a movie title');

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

    <div className={styles.hero}>
      <form onSubmit={onSubmit} className={styles.form}>
        <input type="text" name="query" placeholder='Search a movie' autocomplete="off"/>
        <button type="submit" ><FaSearch className={styles.searchIcon}/></button>
      </form>
    </div>
    

{/* 
      <hr /> */}

      <>
        {' '}
        {searchFilm.length ? (
          <ul className={styles.filmList}>
            {searchFilm.map(el => {
              return (
                <li key={el.id} className={styles.filmListItem}>
                  <Link state={{ from: location }} to={`/czicinema-movies/movies/${el.id}`}>
                    <img
                      width="300"
                      height="auto"
                      src={
                        el.poster_path
                          ? `https://image.tmdb.org/t/p/w300${el.poster_path}`
                          : `https://images.unsplash.com/photo-1521678164864-532dfc45a5b9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
                      }
                      alt={el.name}
                    />

                    <p className={styles.titleName}>{el.title ? el.title : el.name}</p>
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