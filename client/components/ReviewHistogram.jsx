import React from 'react';
import ReviewHistogramBar from './ReviewHistogramBar.jsx';
import styles from './css/ReviewSnapshot.css';

const ReviewHistogram = (props) => {
  let histogram = [];
  for (let i = 0; i < 5; i++) {
    let histogramBar = {
      id: i + 1,
      value: '(work in progress)'
    };
    histogram.push(histogramBar);
  };

  return (
    <section className={styles.snp_box} >
      <div className={styles.snp_boxTitle} >Ratings Distribution</div>
      <div className={styles.snp_textBlock} >
        {histogram.map(histogram =>
          <ReviewHistogramBar bar={histogram.value} key={histogram.id}/>
        )}
      </div>
    </section>
  )
};


export default ReviewHistogram;