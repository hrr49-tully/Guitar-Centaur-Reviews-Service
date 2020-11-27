import React from 'react';
import thumbs from './css/thumbs.js';
import styles from './css/ReviewsStyles.css';

const Recommended = (props) => {
  let review = props.review;
    return (
    <div className={styles.rv_thumbs}>
      <button className={styles.thumbsButton} >
        <span>
          <svg className={styles.vectorThumb} version="1.1" x="0px" y="0px" viewBox="0 0 216 146" xml:space="preserve" focusable="false" aria-hidden="true">
            <g>
              <path className={styles.vectorThumbFill} fill="#707070" d={thumbs.thumb}/>
              <path className={styles.vectorThumbFill} fill="#707070" d={thumbs.cuff}/>
            </g>
          </svg>
        </span>
        <span className={styles.thumbsNumber}>
          {review.upVotes}
        </span>
      </button>
      <button className={`${styles.thumbsButton} ${styles.thumbsButtonRight}`}>
        <span>
          <svg className={`${styles.vectorThumb} ${styles.vectorThumbDown}` } version="1.1" x="0px" y="0px" viewBox="0 0 216 146" xml:space="preserve" focusable="false" aria-hidden="true">
            <g>
              <path className={styles.vectorThumbFill} fill="#707070" d={thumbs.thumb} />
              <path className={styles.vectorThumbFill} fill="#707070" d={thumbs.cuff} />
            </g>
          </svg>
        </span>
        <span className={styles.thumbsNumber}>
          {review.downVotes}
        </span>
      </button>
    </div>
  );
};


export default Recommended;