import React from 'react';
import Stars from './Stars.jsx';
import MoreDetails from './MoreDetails.jsx';
import Recommended from './Recommended.jsx';
import styles from './css/ReviewsStyles.css';
import thumbs from './css/thumbs.js';

const ReviewEntry = (props) => {
  const review = props.review;
  return (
    <div className={styles.singleReview}>
      <header className={styles.rv_header}>
        <Stars stars={review.stars}/>
        <div className={styles.starsNumber}>{review.stars}</div>
        <div className={styles.rv_title}>{review.title}</div>
      </header>
      <section className={styles.contentBlock}>
        <div className={styles.rightBlock}>
          <div className={styles.rightBlockLine}>Submitted
            <span className={styles.date}>  {review.dateSubmitted.split(',').join(', ')}</span>
          </div>
          <div className={styles.rightBlockLine}>By {review.user}</div>
          <div className={styles.rightBlockLine}>From {review.location}</div>
        </div>
        <p className={styles.rv_content} >{review.contents}</p>
      </section>
      <MoreDetails review={review} />
      <footer className={styles.footer}>
        <p className={styles.wouldRecommend}>Bottom line, {review.wouldRecommend ? 'yes' : 'no'} I would {review.wouldRecommend ? null : 'not'} recommend to a friend</p>
        <div className={styles.rv_recommend}>
          <div className={styles.rv_helpful}>
            <span>Was this review helpful to you?</span>
          </div>
          <Recommended review={props.review} />
        </div>
      </footer>
    </div>
  )
}

export default ReviewEntry;