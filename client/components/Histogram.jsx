import React from 'react';
import HistogramBar from './HistogramBar.jsx';
import styles from './css/ReviewSnapshot.css';
import SortBy from './SortBy.jsx';

const Histogram = (props) => {
  const [numberStarReviews, setNumberStarReviews] = React.useState(false);
  let histogram = [];

  if (!numberStarReviews) {
    for (let i = 1; i < 6; i++) {
      let histogramBar = props.sortByStars(i);
      histogram.push(histogramBar);
      setNumberStarReviews(true);
    };
  };

  return (
    <section className={styles.snp_box} >
      <div className={styles.snp_boxTitle} >Ratings Distribution</div>
      <div className={styles.snp_textBlock} >
        {histogram.map(histogram =>
          <HistogramBar bar={histogram} />
        )}
      </div>
    </section>
  )
};


export default Histogram;