import React from 'react';
import Stars from './Stars.jsx';
import MoreDetails from './MoreDetails.jsx';
import styles from './css/ReviewsStyles.css';
import thumbs from './css/thumbs.js';

const ReviewEntry = (props) => {
  let review = props.review;
  return (
    <div className={styles.singleReview}>
      <header className={styles.rv_header}>
        <Stars stars={review.stars}/>
        <div className={styles.starsNumber}>{review.stars}</div>
        <div className={styles.rv_title}>{review.title}</div>
      </header>
      <section className={styles.contentBlock}>
        <div className={styles.rightBlock}>
          <div className={styles.rightBlockLine}>Submitted
            <span className={styles.date}>  {review.dateSubmitted.split(',').join(', ')}</span>
          </div>
          <div className={styles.rightBlockLine}>By {review.user}</div>
          <div className={styles.rightBlockLine}>From {review.location}</div>
        </div>
        <p className={styles.rv_content} >{review.contents}</p>
      </section>
      <MoreDetails pros={review.pros} cons={review.cons} experience={review.experience} />
      <footer className={styles.footer}>
        <p>Bottom line, {review.wouldRecommend ? 'yes' : 'no'} I would {review.wouldRecommend ? null : 'not'} recommend to a friend</p>
        <div className={styles.rv_recommend}>
          <div className={styles.rv_helpful}>
            <span>Was this review helpful to you?</span>
          </div>
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
        </div>
      </footer>
    </div>
  )
}

export default ReviewEntry;