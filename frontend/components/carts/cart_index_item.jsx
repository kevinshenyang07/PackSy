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
        <div className='purchased-cart-item-details'>
          <ul className='cart-item-details-left'>
            <li className='cart-item-name'>
              {cartItem.title}
            </li>
            <li className='cart-item-seller'>
              {`by: ${cartItem.producer}`}
            </li>
          </ul>
          <ul className='cart-item-details-right'>
            <li className='cart-item-quantity'>
              {cartItem.itemQuantity}
            </li>
            <li className='cart-item-price'>
              {parseFloat(cartItem.price).toFixed(2)}
            </li>
            <li className='cart-item-purchased'>
              {cartItem.updatedAt.slice(0, 10)}
            </li>
          </ul>
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
