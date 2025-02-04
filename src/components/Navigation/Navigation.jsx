import { NavLink, useLocation } from 'react-router-dom';
import styles from './Navigation.module.css';

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className={styles.nav}>
      <div className={styles.nameNav}>
        <NavLink to="/goit-react-hw-05-movies/" className={styles.nameLink}>
          <>Czi<span>Cinema</span></>
        </NavLink>
      </div>
      <ul className={styles.navList}>
        <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.activeNavLink : styles.navLink
          }
          to="/goit-react-hw-05-movies/"
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
            to="/goit-react-hw-05-movies/movies"
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
