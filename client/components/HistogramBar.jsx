import React from 'react';
import styles from './css/ReviewSnapshot.css';

const HistogramBar = (props) => (
  <div className={styles.snp_text} >
    {props.bar}
  </div>
)


export default HistogramBar;