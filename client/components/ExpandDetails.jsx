import React from 'react';
import styles from './css/ReviewsStyles.css';

const ExpandDetails = (props) => (
  console.log(props),
  <div onClick={ () => {props.collapse()}}>
    {props.review.pros}
    {props.review.cons}
    {props.review.experience}
  </div>
)


export default ExpandDetails;