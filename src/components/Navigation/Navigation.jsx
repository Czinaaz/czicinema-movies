import { NavLink, useLocation } from 'react-router-dom';
import styles from './Navigation.module.css';

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className={styles.nav}>
      <div className={styles.nameNav}>
        <NavLink to="/czicinema-movies/" className={styles.nameLink}>
          <>Czi<span>Cinema</span></>
        </NavLink>
      </div>
      <ul className={styles.navList}>
        <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.activeNavLink : styles.navLink
          }
          to="/czicinema-movies/"
          end /* Ensures Home is only active on the exact "/" path */
        >
          Home
        </NavLink>

        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.activeNavLink2 : styles.navLink
            }
            state={{ from: location }}
            to="/czicinema-movies/movies"
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
