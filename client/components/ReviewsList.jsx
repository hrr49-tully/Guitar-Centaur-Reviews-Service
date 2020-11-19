import React from 'react';
import ReviewEntry from './ReviewEntry.jsx';
import styles from './css/ReviewsStyles.css';

const ReviewsList = (props) => (
  <div className={styles.allReviews}>
    {props.reviews.map(review =>
      <ReviewEntry review={review} key={review.id} />
    )}
  </div>
)


export default ReviewsList;