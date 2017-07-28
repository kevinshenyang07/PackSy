import React from 'react';
import { Link } from 'react-router-dom';

import ReviewFormContainer from '../reviews/review_form_container';

class CartIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cartItem = this.props.cartItem;
    return (
      <li className='cart-item'>
        <ul>
          <li>
            <Link to={ `/items/${cartItem.id}` }>
              <img className='cart-item-image' src={cartItem.imgUrl} />
            </Link>
          </li>
        </ul>
        <div className='cart-item-details-left'>
          <span className='cart-item-name'>
            { this.props.cartItem.title }
          </span>
          <li className='cart-item-seller'>
            {`Sold by: ${this.props.cartItem.producer}`}
          </li>
        </div>
        <div className='cart-item-details-right'>
          <p>{`Bought on: ${cartItem.updatedAt.slice(0, 10)}`}</p>
          <p>{`Price: $${parseFloat(cartItem.price).toFixed(2)}`}</p>
          <p>{`Quantity: ${cartItem.itemQuantity}`}</p>
        </div>
        <div className='cart-item-review'>
          <li>
            <ReviewFormContainer
              cartItemId={cartItem.cartItemId}
              itemId={cartItem.id} />
          </li>
        </div>
      </li>
    );
  }
}

export default CartIndexItem;
