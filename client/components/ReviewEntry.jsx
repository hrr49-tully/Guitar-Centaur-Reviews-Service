import React from 'react';

const ReviewEntry = (props) => {
  let review = props.review;
  review.wouldRecommend ? review.wouldRecommend = 'Yes' : review.wouldRecommend = 'No';
  return (
    <div>
      {review.title}
      <br/>
      {review.contents}
      <br/>
      Stars: {review.stars}
      <br/>
      User: {review.user}
      <br/>
      Experience: {review.experience}
      <br/>
      Date Submitted: {review.dateSubmitted}
      <br/>
      Location: {review.location}
      <br/>
      Up Votes: {review.upVotes}
      <br/>
      Down Votes: {review.downVotes}
      <br/>
      Pros: {review.pros}
      <br/>
      Cons: {review.cons}
      <br/>
      Would Recommend: {review.wouldRecommend}
      <br/><br/><br/>
    </div>
  )
}

export default ReviewEntry;