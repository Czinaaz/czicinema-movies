import { useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';

import { getRewiesMovies } from 'api/api';

import { ReviewsItem } from './ReviewsItem';

import styles from './Reviews.module.css';

import { RiEmotionUnhappyLine } from "react-icons/ri";

const Reviews = () => {
  const { movieId } = useParams();

  const [review, setReview] = useState([]);

  useEffect(() => {
    getRewiesMovies(movieId).then(setReview);
  }, [movieId]);

  return (
    <>
      {review.length ? (
        <ul className={styles.list}>
          {review.length &&
            review.map(el => {
              return (
                <ReviewsItem
                  key={el.id}
                  author={el.author}
                  content={el.content}
                />
              );
            })}
        </ul>
      ) : (
        <div  className={styles.elseDiv}>
          <h4>There is no reviews yet <RiEmotionUnhappyLine/></h4>
        </div>
        
      )}
    </>
  );
};

export default Reviews;