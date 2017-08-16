import React from 'react';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import Rater from 'react-rater';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
      reviewBody: ''
    };

    this.handleRate = this.handleRate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRate(_ref) {
    if (_ref.type === 'click') {
      this.setState({rating: _ref.rating});
    }
  }

  handleChange(e) {
    this.setState({reviewBody: e.target.value});
  }

  handleSubmit(e) {

    const review = {
      item_id: this.props.itemId,
      rating: this.state.rating,
      body: this.state.reviewBody
    };

    this.props.createReview(review).then(() =>
      this.props.history.push(`/items/${this.props.itemId}`)
    );
  }

  render() {
    return (
      <div>
        <div className="review-rating">
          Rating
          <Rater onRate={this.handleRate} />
        </div>
        <div>Description</div>
        <div className='review-description'>
          <textarea
            value={this.state.reviewBody}
            onChange={this.handleChange}
          />
        </div>
        <p className="submit-review" onClick={this.handleSubmit}>
          Submit Review
        </p>
      </div>
    );
  }
}

export default ReviewForm;
