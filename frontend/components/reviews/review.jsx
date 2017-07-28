import React from 'react';
// import { Link } from 'react-router-dom';
import Rater from 'react-rater';

const Review = ({ review }) => {
  return (
      <div className='review-content'>
        <div className='reviewer'>
          <p className='reviewed-by'>Reviewed by</p>
          <p>{ `${review.user.firstname} ${review.user.lastname}`}</p>
        </div>
        <div className="review-right">
          <div className='review-rating-date'>
            <Rater rating={review.rating} interactive={false} />
            <span>{review.updatedAt.slice(0, 10)}</span>
          </div>
          <div className='review-body'>
            <p>{ review.body }</p>
          </div>
        </div>

      </div>
  );
};

export default Review;
