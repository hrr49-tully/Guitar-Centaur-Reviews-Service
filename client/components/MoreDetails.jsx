import React from 'react';
import styles from './css/ReviewsStyles.css';

const MoreDetails = (props) => {
  const review = props;
  return (
    <section>
      <button className={styles.moreDetailsButton}>
        More Details
        <span className={styles.moreDetailsIcon}>
          <svg viewBox="-9 -10 52 52" focusable="false" role="presentation">
            <g>
              <polyline className={styles.caret} points="23.7,31.5 8.3,16 23.7,0.5">
              </polyline>
            </g>
          </svg>
        </span>
      </button>
    </section>
  )
}

      // Pros: {review.pros}
      // <br/>
      // Cons: {review.cons}
      // <p>Describe Yourself: {review.experience}</p>

export default MoreDetails;