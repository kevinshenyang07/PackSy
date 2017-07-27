import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';

import CurrentCartItem from './current_cart_item';

class CurrentCart extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.createNewCart = this.createNewCart.bind(this);
  }

  componentDidMount() {
    this.props.fetchCartItems();
  }

  handleSubmit(e) {
    e.preventDefault();
    const currentCartId = this.props.cartItems[0].cart_id;
    this.props.updateCart({id: currentCartId, purchased: true})
      .then(this.createNewCart)
      .then(() => this.props.history.push('/purchased_items'));
  }

  createNewCart() {
    this.props.createCart({ user_id: this.props.currentUser.id });
  }

  render() {
    const cartItems = this.props.cartItems;
    let totalPrice = 0;
    cartItems.forEach(function(cartItem) {
      totalPrice += cartItem.item_price * cartItem.item_quantity;
    });

    if (cartItems.length === 0) {
      return (
        <div className='cart-items-container'>
          <div className='cart-items-top'>
            <h2>{`${cartItems.length} item(s) in your cart`}</h2>
            <Link className='keep-shopping-button-empty' to={`/items`}>
              Keep shopping
            </Link>
          </div>
        </div>
      );
    } else {
      return (
        <div className='cart-items-container'>
          <div className='cart-items-top'>
            <h2>{`${cartItems.length} item(s) in your cart`}</h2>
            <Link className='keep-shopping-button' to={`/items`}>
              Keep shopping
            </Link>
          </div>
          <div className='cart-items-box'>
            <div>
              <ul className='cart-items'>
                {cartItems.map(cartItem =>
                  <CartItemsIndexItem
                    key={ cartItem.id }
                    cartItem={ cartItem }
                    updateCartItem={ this.props.updateCartItem }
                    deleteCartItem={ this.props.deleteCartItem }
                    fetchCartItems={ this.props.fetchCartItems }
                  />
                )}
              </ul>
            </div>
            <div className='cart-details-flex-right'>
              <ul className='items-total'>
                <li>{`Item(s) total:`}</li>
                <li className='amount'>{`$${totalPrice}.00`}</li>
              </ul>
              <FlatButton className='primary' label='Make a purchase'
                onTouchTap={this.handleSubmit}/>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default CurrentCart;
