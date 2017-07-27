// My Purchases
import React, { Component } from 'react';
import { Link } from 'react-router';

import CartsIndexItem from './carts_index_item';

class CartsIndex extends Component {
  componentDidMount() {
    this.props.fetchCarts();
  }

  render() {
    let cartItems = [];
    let purchasedCarts = this.props.carts.slice(0, -1);
    purchasedCarts.forEach(cart => cartItems.push(cart.cart_items));
    cartItems = [].concat.apply([], cartItems);

    return (
      <div className='purchased-cart-items-container'>
        <div className='cart-items-top'>
          <h2>Purchases</h2>
          <Link className='keep-shopping-button-empty' to={`/items`}>Keep shopping</Link>
        </div>
        <div className='cart-items-box'>
          <div>
            <ul className='cart-items'>
              { cartItems.reverse().map(cartItem => <CartsIndexItem key={cartItem.id} cartItem={cartItem} />)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default CartsIndex;
