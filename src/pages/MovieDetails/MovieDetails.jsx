import { getDetailsMovies, getMovieVideos } from 'api/api';
import { useEffect, useState } from 'react';
import { useParams, Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [movieInfo, setMovieInfo] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    getDetailsMovies(movieId).then(setMovieInfo);
    getMovieVideos(movieId).then(videos => {
      const trailer = videos.find(video => video.type === 'Trailer' && video.site === 'YouTube');
      if (trailer) setTrailerKey(trailer.key);
    });
  }, [movieId]);

  return (
    <>
      {movieInfo ? (
        <div className={styles.divStyle}>
          <hr />
          <div className={styles.goBack}>
            <button
              className={styles.btn}
              onClick={() => navigate(location?.state?.from ?? '/czicinema-movies/')}
            >
              Go back
            </button>
          </div>

          <div className={styles.wrapper}>
            <div className={styles.mediaContainer}>
              <img
                width="400"
                height="auto"
                src={
                  movieInfo.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`
                    : 'https://images.unsplash.com/photo-1521678164864-532dfc45a5b9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
                alt={movieInfo.title}
              />

            </div>

            <div className={styles.descrWrapper}>
              <h2>{movieInfo.title} ({movieInfo.release_date.slice(0, 4)})</h2>
              <h3 className={styles.userScore}>
                User score:{' '}
                <span
                  style={{
                    color: movieInfo.vote_average * 10 < 50 ? 'red' :
                          movieInfo.vote_average * 10 < 75 ? '#bb9600' : 'green'
                  }}
                >
                  {Math.ceil(Number(movieInfo.vote_average) * 10) + '%'}
                </span>
              </h3>
              <h3>Overview</h3>
              <p>{movieInfo.overview}</p>
              <h3>Genres</h3>
              <span>{movieInfo.genres.map(genre => genre.name).join(', ')}</span>

            </div>

          </div>
          <div>
            {trailerKey && (
              <iframe
                className={styles.trailer}
                src={`https://www.youtube.com/embed/${trailerKey}`}
                title="Movie Trailer"

                allowFullScreen
              ></iframe>
            )}
          </div>

          <hr />
          <div className={styles.info}>
            <h3>Additional information</h3>
            <Link className={styles.link} state={{ from: location?.state?.from ?? '/' }} to="cast">
              Cast
            </Link>
            <br />
            <Link className={styles.link} state={{ from: location?.state?.from ?? '/' }} to="reviews">
              Reviews
            </Link>
          </div>

          <Outlet />
        </div>
      ) : (
        <h3>Ooops, something went wrong...</h3>
      )}
    </>
  );
};

export default MovieDetails;
