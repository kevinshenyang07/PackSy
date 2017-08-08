import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Divider from 'material-ui/Divider';
import Rater from 'react-rater';

import Review from './review';

class ReviewIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.itemId);
  }

  render() {
    const reviewsById = this.props.reviews.byId;
    const reviewCount = Object.keys(reviewsById).length;

    if (reviewCount !== 0) {

      let totalRatings = 0;
      Object.keys(reviewsById).forEach(id => {
        totalRatings += reviewsById[id].rating;
       });
      const avgRating = totalRatings / reviewCount;

      const reviews = Object.keys(reviewsById).reverse().map((id, i) => {
        const review = reviewsById[id];
        return (
          <div key={`review-${review.id}`} className="single-review">
            <Divider />
            <Review review={review} currentUser={this.props.currentUser}
              deleteReview={this.props.deleteReview.bind(this, review.id)} />
          </div>
        );
      });

      return (
        <section className='reviews-section'>
          <div className='review-header'>
            <span>Reviews</span>
            <Rater interactive={false} rating={avgRating} />
            { `(${reviewCount})` }
          </div>
          <div className='review-items'>
            {reviews}
          </div>
        </section>
      );
    } else {
      return <div></div>;
    }

  }
}

export default ReviewIndex;
