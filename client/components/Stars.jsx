import React from 'react';
import yellowStar from './starsImages/yellowStar.png';
import grayStar from './starsImages/grayStar.png';
import halfStar from './starsImages/halfStar.png';
import styles from './css/ReviewsStyles.css';

const Stars = (props) => {
  let reviewStars = [];
  let filledStars = props.stars;
  let decimal = filledStars.toString().slice(2, 3);
  Number(decimal) < 9 && Number(decimal) > 2 ? filledStars -= 1 : decimal = null;
  for (let i = 0; i < filledStars; i++) {
    reviewStars.push(<img className={styles.stars} src={yellowStar} alt='yellow star' />);
  }
  if (decimal) {
    reviewStars.push(<img className={styles.stars} src={halfStar} alt='half yellow star' />)
  }
  for (let i = reviewStars.length; i < 5; i++) {
    reviewStars.push(<img className={styles.stars} src={grayStar} alt='gray star' />)
  }
  return (
    <div>
      {reviewStars}
    </div>
  )
};


export default Stars;