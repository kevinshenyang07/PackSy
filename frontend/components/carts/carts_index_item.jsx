import React from 'react';
import { Link } from 'react-router-dom';

import ReviewFormContainer from '../reviews/review_form_container';

class CartsIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className='cart-item'>
        <ul>
          <li>
            <Link to={ `/items/${this.props.cartItem.item_id}` }>
              <img className='cart-item-image'src={ this.props.cartItem.item_image } alt={ this.props.cartItem.item_name } />
            </Link>
          </li>
        </ul>
        <ul className='purchased-cart-item-details'>
          <ul className='cart-item-details-left'>
            <li className='cart-item-name'>
              { this.props.cartItem.item_name }
            </li>
            <li className='cart-item-seller'>
              { `${this.props.cartItem.item_seller.first_name} ${this.props.cartItem.item_seller.last_name}` }
            </li>
          </ul>
          <ul className='cart-item-details-right'>
            <li className='cart-item-quantity'>
              { this.props.cartItem.item_quantity }
            </li>
            <li className='cart-item-price'>
              { `$${this.props.cartItem.item_price}.00` }
            </li>
            <li className='cart-item-purchased'>
              { this.props.cartItem.item_updated_date_time.slice(0, 10) }
            </li>
          </ul>
        </ul>
        <ul className='cart-item-review'>
          <li>
            <ReviewFormContainer cartItemId={this.props.cartItem.id} itemId={this.props.cartItem.item_id} />
          </li>
        </ul>
      </li>
    );
  }
}

export default CartsIndexItem;
