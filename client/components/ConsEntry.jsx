import React from 'react';
import styles from './css/ReviewSnapshot.css';

const ConsEntry = (props) => (
  <div className={styles.snp_text} >
    <span className={styles.snp_number}>{props.con.count}</span>
    {props.con.description}
  </div>
)


export default ConsEntry;