import React from 'react';
import ExpandDetails from './ExpandDetails.jsx';
import styles from './css/ReviewsStyles.css';

const MoreDetails = (props) => {
  const review = props;
  const [showDetails, setShowDetails] = React.useState(false);
  const onExpand = () => {
    setShowDetails(true);
    console.log(document.getElementsByClassName(styles.moreDetailsIcon)[0]);
    document.getElementsByClassName(styles.moreDetailsIcon)[0].classList.add(`${styles.moreDetailsIconExpanded}`);
  };
  const collapse = () => {
    setShowDetails(false);
    document.getElementsByClassName(styles.moreDetailsIcon)[0].classList.remove(`${styles.moreDetailsIconExpanded}`);
  };
  return (
    <section>
      <button className={styles.moreDetailsButton} onClick={() => {console.log('frick'), onExpand()}}>
        More Details
        <span className={styles.moreDetailsIcon}>
          <svg viewBox="-9 -10 52 52" focusable="false" role="presentation">
            <g>
              <polyline className={styles.caret} points="23.7,31.5 8.3,16 23.7,0.5" />
            </g>
          </svg>
        </span>
      </button>
      { showDetails ? <ExpandDetails
      onExpand={onExpand}
      collapse={collapse}
      review={review} /> : null }
    </section>
  )
}


export default MoreDetails;