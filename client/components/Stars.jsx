import React from 'react';
import yellowStar from './starsImages/yellowStar.png';
import grayStar from './starsImages/grayStar.png';
import styles from './css/ReviewsStyles.css';

const Stars = (props) => {
  let reviewStars = [];
  let filledStars = props.stars;
  for (let i = 0; i < filledStars; i++) {
    reviewStars.push(<img className={styles.stars} src={yellowStar} alt='yellow star' />);
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