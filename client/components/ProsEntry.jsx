import React from 'react';
import styles from './css/ReviewSnapshot.css';

const ProsEntry = (props) => (
  <div className={styles.snp_text} >
    <span className={styles.snp_number} >{props.pro.count}</span>
    {props.pro.description}
  </div>
)


export default ProsEntry;