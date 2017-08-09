import React from 'react';
import Rater from 'react-rater';

const fromCurrentUser = (review, currentUser) => {
  if (!currentUser) return false;
  if (currentUser.firstname === review.user.firstname &&
        currentUser.lastname === review.user.lastname)
    return true;
  else {
    return false;
  }
};

const Review = ({ review, currentUser, deleteReview }) => {
  const maybeRemoveLink = fromCurrentUser(review, currentUser) ?
    <span onClick={deleteReview}>remove</span> : <span></span>;

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
            <p>{review.body}</p>
            <span>{maybeRemoveLink}</span>
          </div>
        </div>

      </div>
  );
};

export default Review;
