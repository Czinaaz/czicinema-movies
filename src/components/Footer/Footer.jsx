import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h2>Czi<span>Cinema</span></h2>
        </div>
        
        <ul className={styles.navLinks}>
          <li><Link to="/goit-react-hw-05-movies/">Home</Link></li>
          <li><Link to="/goit-react-hw-05-movies/movies">Movies</Link></li>
          <li><a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>

        <p className={styles.copyright}>
          © {new Date().getFullYear()} Czi Cinema. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
