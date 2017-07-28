import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';

import CurrentCartItem from './current_cart_item';

class CurrentCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.createNewCart = this.createNewCart.bind(this);
  }

  componentDidMount() {
    this.props.fetchCartItems().then(() => this.setState({loaded: true}));
  }

  handleSubmit(e) {
    e.preventDefault();
    const cartItems = this.props.cartItems;
    const firstCartItemId = Object.keys(cartItems)[0];
    const currentCartId = cartItems[firstCartItemId].cartId;
    this.props.updateCart({id: currentCartId, purchased: true})
      .then(() => this.createNewCart())
      .then(() => this.props.history.push('/purchases'));
  }

  createNewCart() {
    this.props.createCart({ user_id: this.props.currentUser.id });
  }

  render() {
    if (!this.state.loaded) return <div></div>;

    const cartItems = this.props.cartItems;
    const cartItemCount = Object.keys(cartItems).length;

    if (cartItemCount === 0) {
      return (
        <div className="item-background">
          <div className='cart-items-container'>
            <div className='cart-items-top'>
              <h2>{`${cartItemCount} item(s) in your cart`}</h2>
              <Link className='keep-shopping-button-empty' to="/items">
                Keep shopping
              </Link>
            </div>
          </div>
        </div>
      );

    } else {

      let totalPrice = 0;
      Object.keys(cartItems).forEach(function(id) {
        const cartItem = cartItems[id];
        totalPrice += cartItem.price * cartItem.itemQuantity;
      });

      const currentCartItems = Object.keys(cartItems).map(id => {
        const cartItem = cartItems[id];
        return (
          <CurrentCartItem
            key={cartItem.id} cartItem={cartItem}
            updateCartItem={ this.props.updateCartItem }
            deleteCartItem={ this.props.deleteCartItem }
          />
        );
      });

      return (
        <div className="item-background">
          <div className='cart-items-container'>
            <div className='cart-items-top'>
              <h2>{`${cartItemCount} item(s) in your cart`}</h2>
              <Link className='keep-shopping-button' to="/items">
                Keep shopping
              </Link>
            </div>
            <div className='cart-items-box'>
              <div>
                <ul className='cart-items'>
                  {currentCartItems}
                </ul>
              </div>
              <div className='cart-details-flex-right'>
                <div className='items-total'>
                  <span>{`Item(s) total: `}</span>
                  <span>{`$${totalPrice.toFixed(2)}`}</span>
                </div>
                <FlatButton className='primary' label='Make a purchase'
                  onTouchTap={this.handleSubmit} style={{width: '100%'}}/>
                <p>No worries, it's just a demo and
                  you are not going to be charged.</p>
              </div>
            </div>
          </div>
        </div>

      );
    }
  }
}

export default CurrentCart;
