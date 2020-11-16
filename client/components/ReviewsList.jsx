import React from 'react';
import ReviewEntry from './ReviewEntry.jsx';

const ReviewsList = (props) => (
  <div>
    {props.reviews.map(review =>
      <ReviewEntry review={review} key={review.id} />
    )}
  </div>
)


export default ReviewsList;