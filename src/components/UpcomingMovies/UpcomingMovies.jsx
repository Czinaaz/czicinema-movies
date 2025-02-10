import { useEffect, useState } from 'react';
import { fetchUpcomingMovies } from 'api/api';
import { Link } from 'react-router-dom';
import styles from './UpcomingMovies.module.css';

const UpcomingMovies = () => {
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    useEffect(() => {
        fetchUpcomingMovies().then(setUpcomingMovies);
    }, []);

    return (
        <section className={styles.upcomingSection}>
        <h2 className={styles.title}> Expected Premieres</h2>
        <div className={styles.movieContainer}>
            {upcomingMovies.map(({ id, title, release_date, poster_path }) => (
            <div key={id} className={styles.movieCard} >
                <Link className={styles.linkItem} to={`/czicinema-movies/movies/${id}`}>
                <img
                src={
                    poster_path
                    ? `https://image.tmdb.org/t/p/w300${poster_path}`
                    : 'https://via.placeholder.com/300x450?text=No+Image'
                }
                alt={title}
                className={styles.poster}
                />
                <h3 className={styles.movieTitle}>{title}</h3>
                <p className={styles.releaseDate}>📅 Premiere: {release_date}</p>
                </Link>
            </div>
            ))}
        </div>
        </section>
    );
};

export default UpcomingMovies;
