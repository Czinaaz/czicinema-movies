import { PropTypes } from 'prop-types';

import styles from './ReviewsItem.module.css';



export const ReviewsItem = ({ author, content }) => {
  return (
    <li className={styles.item}>
      <h4>Author: {author}</h4>
      <hr />
      <p>{content}</p>
    </li>
  );
};

ReviewsItem.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};