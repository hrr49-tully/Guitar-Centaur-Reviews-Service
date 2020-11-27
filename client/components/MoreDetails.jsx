import React from 'react';
import ExpandDetails from './ExpandDetails.jsx';
import styles from './css/ReviewsStyles.css';

const MoreDetails = (props) => {
  const review = props.review;
  const [showDetails, setShowDetails] = React.useState(false);
  const index = review.id - 1;
  let details;
  showDetails ? details = 'Less Details' : details = 'More Details';
  const onExpand = (event) => {
    if (!showDetails) {
      setShowDetails(true);
      document.getElementsByClassName(styles.moreDetailsIcon)[index].classList.add(`${styles.moreDetailsIconExpanded}`);
    } else if (showDetails) {
      setShowDetails(false);
      document.getElementsByClassName(styles.moreDetailsIcon)[index].classList.remove(`${styles.moreDetailsIconExpanded}`);
    }
  };
  return (
    <section>
      <button className={styles.moreDetailsButton} onClick={ (event) => onExpand(event) }>
        {details}
        <span className={styles.moreDetailsIcon}>
          <svg viewBox="-9 -10 52 52" focusable="false" role="presentation">
            <g>
              <polyline className={styles.caret} points="23.7,31.5 8.3,16 23.7,0.5" />
            </g>
          </svg>
        </span>
      </button>
      { showDetails ? <ExpandDetails review={review} /> : null }
    </section>
  )
}


export default MoreDetails;