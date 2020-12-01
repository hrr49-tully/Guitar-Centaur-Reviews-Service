import React from 'react';
import Stars from './Stars.jsx';
import styles from './css/ReviewSnapshot.css';
import checkmark from './starsImages/checkmark.png';

const ReviewSummary = (props) => {
  const average = props.average;
  const count = props.count;
  const percentage = Math.round(((Math.random() * .2 + .5).toString().slice(0, 4)) * 100);
  return (
    <div className={styles.snapshot}>
      Review Snapshot
      <div className={styles.text}>
        <Stars stars={average} />
        <span className={styles.average}> {average} </span>
        <span className={styles.count}>{count} Reviews</span>
        <div className={styles.respondents}>
          <span className={styles.respondents_text}>
            <span className={styles.percentage} >
              <img className={styles.checkmark} src={checkmark} alt='checkmark' />
              {percentage}%
              </span>
            of respondents would recommend this to a friend
          </span>
        </div>
      </div>
    </div>
  );
};


export default ReviewSummary;