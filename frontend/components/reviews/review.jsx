import React from 'react';
// import { Link } from 'react-router-dom';
import Rater from 'react-rater';

const Review = ({ review }) => {
  return (
      <div className='review'>
        <ul className='reviewer'>
          <li className='reviewed-by'>Reviewed by</li>
          <li>{ `${review.user.firstname} ${review.user.lastname}`}</li>
        </ul>
        <ul className='reviewer-review'>
          <li className='star'>
            <Rater rating={ review.rating } interactive={false} />
          </li>
          <li>{ review.body }</li>
        </ul>
        <ul className='reviewer-review-date'>
          <li>{ review.updatedAt.slice(0, 10) }</li>
        </ul>
      </div>
  );
};

export default Review;
