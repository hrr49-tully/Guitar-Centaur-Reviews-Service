import React from 'react';
import styles from './css/ReviewSnapshot.css';
import style from './css/Histogram.css';

const HistogramBar = (props) => {
  const [count, increment] = React.useState(1);
  const number = Math.round(props.bar * (.01 * props.number));
  const width = (number/props.number) * 100;
  return (
    <div>
      <span className={style.starCount}>{count} Stars</span>
      <div  className={style.bar} style={{width : `${width}%`}}>
        <span></span>
        <div className={styles.snp_text}>{number}</div>
      </div>
    </div>
  )
  increment(5);
}


export default HistogramBar;