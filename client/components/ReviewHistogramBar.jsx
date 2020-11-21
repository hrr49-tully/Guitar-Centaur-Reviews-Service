import React from 'react';
import styles from './css/ReviewSnapshot.css';

const ReviewHistogramBar = (props) => (
  console.log(props),
  <div className={styles.snp_text} >
    {props.bar}
  </div>
)


export default ReviewHistogramBar;