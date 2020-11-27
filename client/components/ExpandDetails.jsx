import React from 'react';
import styles from './css/ReviewsStyles.css';

const ExpandDetails = (props) => {
  const pros = [props.review.pros.split(',')];
  const cons = [props.review.cons.split(',')];
  return (
    <section>
      <div className={styles.moreDetailsProsCons} >
        <div className={styles.moreDetailsPCSection}>
        <div className={styles.moreDetailsPCHeader}>Pros</div>
          {pros[0].map(pro =>
          <div className={styles.moreDetailsSinglePC}>{pro}</div>
          )}
        </div>
        <div className={styles.moreDetailsPCSection}>
          <div className={styles.moreDetailsPCHeader}>Cons</div>
          {cons[0].map(con =>
          <div className={styles.moreDetailsSinglePC}>{con}</div>
          )}
        </div>
      </div>
      <div className={styles.moreDetailsDescribeYourself}>
        Describe Yourself
        <span className={styles.moreDetailsExperience}>{props.review.experience}</span>
      </div>
    </section>
  );
};

export default ExpandDetails;