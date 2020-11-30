import React from 'react';
import ReviewEntry from './ReviewEntry.jsx';
import styles from './css/ReviewsStyles.css';

const ReviewsList = (props) => {
  let reviews = props.reviews.slice(0, 10);
  return (
    <div className={styles.allReviews}>
    {reviews.map(review =>
      <ReviewEntry review={review} key={review.id} />
      )}
    </div>
  )
}


export default ReviewsList;