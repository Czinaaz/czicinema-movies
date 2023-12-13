import { getCastMovies } from 'api/api';

import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { CastItem } from './CastItem';

import styles from './Cast.module.css';



const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCastMovies(movieId).then(({ cast }) => setCast(cast));
  }, [movieId]);

  return (
    <>
      {
        <ul className={styles.list}>
          {cast.length &&
            cast.map(elem => (
              <CastItem
                key={elem.id}
                name={elem.name}
                img={elem.profile_path}
                character={elem.character}
                ></CastItem>
            ))}
        </ul>
      }
    </>
  );
};

export default Cast;