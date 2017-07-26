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
      console.log(avgRating);

      const reviews = Object.keys(reviewsById).map(id => {
        const review = reviewsById[id];
        return (
          <div>
            <Divider />
            <Review key={review.id} review={review} />
          </div>
        );
      });

      return (
        <section className='reviews-section'>
          <span>Reviews
            <Rater interactive={false} rating={avgRating} />
            { `(${reviewCount})` }
          </span>
          <ul className='reviews'>
            {reviews}
          </ul>
        </section>
      );
    } else {
      return <div></div>;
    }

  }
}

export default ReviewIndex;
