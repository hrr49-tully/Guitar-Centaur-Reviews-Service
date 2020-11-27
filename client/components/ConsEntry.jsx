import React from 'react';
import styles from './css/ReviewSnapshot.css';

const ConsEntry = (props) => (
  <div className={styles.snp_text} >
    <div className={styles.snp_popup} >Show reviews with this tag
    <br/>
    <br/>
    <svg viewBox="-9 -10 52 52" focusable="false" role="presentation">
      <g>
        <polyline className={styles.snp_popup_caret} points="23.7,31.5 8.3,16 23.7,0.5" />
      </g>
    </svg>
  </div>
  <span className={styles.snp_number}>{props.con.count}</span>
  {props.con.description}
  </div>
)


export default ConsEntry;