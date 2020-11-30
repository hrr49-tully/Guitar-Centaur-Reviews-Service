import React from 'react';
import HistogramBar from './HistogramBar.jsx';
import styles from './css/ReviewSnapshot.css';
import axios from 'axios';


const Histogram = (props) => {
  const [numberStarReviews, setNumberStarReviews] = React.useState(false);
  const [histogram, setHistogram] = React.useState([]);

  const sortArray = (array) => {
    if (array[0].id > array[1].id) {
      let temporary = array.splice(0, 1);
      array = array.concat(temporary)
    }
  }

  if (!numberStarReviews) {
    let collection = [];
    for (let i = 5; i > 0; i--) {
      axios.get(`api/reviews/stars/${i}`)
      .then(res => {
        const singleBar = {
          id: i,
          bar: res.data.length
        };
        collection.push(singleBar);
      })
      .catch(err => {
        console.error(`get ${endpoint} stars failed: `, err);
      });
    };
    setHistogram(collection);
    setNumberStarReviews(true);
  };

  return (
    <section className={styles.snp_box} >
      <div className={styles.snp_boxTitle} >Ratings Distribution</div>
      <div className={styles.snp_textBlock} >
        {histogram.map(histogramBar =>
          <HistogramBar sortByStars={props.sortByStars} id={histogramBar.id} number={props.number} bar={histogramBar.bar} />
        )}
      </div>
    </section>
  )
};


export default Histogram;