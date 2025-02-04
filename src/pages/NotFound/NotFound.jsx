import { Link } from 'react-router-dom';

import styles from './NotFound.module.css'

const NotFound = () => {
  return (
    <div className={styles.hero}>
      <h2>
        404 Page not found 
      </h2>
      <h3><Link className={styles.link} to="/goit-react-hw-05-movies/">Go to Home Page</Link></h3>
    </div>
  );
};

export default NotFound;