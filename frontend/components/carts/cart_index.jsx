import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

import CartIndexItem from './cart_index_item';

// My Purchases
class CartIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
    };

    this.toItemsPage = this.toItemsPage.bind(this);
  }

  componentDidMount() {
    this.props.fetchCarts().then(() => this.setState({loaded: true}));
  }

  toItemsPage() {
    this.props.history.push('/items');
  }

  render() {
    if (!this.state.loaded) return <div></div>;

    // cart item starting from most recent
    let cartItems = [];
    const purchasedItems = Object.keys(this.props.carts).reverse().slice(1);
    purchasedItems.forEach(id => {
      const cart = this.props.carts[id];
      const itemsInOneCart = Object.keys(cart.cartItems).map(k =>
        cart.cartItems[k]
      );
      cartItems = cartItems.concat(itemsInOneCart);
    });

    const purchases = cartItems.map(cartItem =>
      <CartIndexItem key={cartItem.cartItemId} cartItem={cartItem} />
    );

    return (
      <div className='item-background'>
        <div className='purchased-cart-items-container'>
          <div className='cart-items-top'>
            <h2>Purchases</h2>
            <FlatButton label="Keep shopping" className='primary'
              onTouchTap={this.toItemsPage} style={{marginRight: 34}}/>
          </div>
          <div>
            <ul className='cart-items'>
              {purchases}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default CartIndex;
