import React from 'react';

import FlatButton from 'material-ui/FlatButton';

class AddToCartForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: '1',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
    this.handleBuyItNow = this.handleBuyItNow.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleChange(e) {
    this.setState({ quantity: e.target.value });
  }

  handlePurchase(cartId) {
    this.props.updateCart({id: cartId, purchased: true})
    .then(() => this.props.createCart({ user_id: this.props.currentUser.id }))
    .then(() => this.props.history.push('/purchases'));
  }

  handleBuyItNow(e) {
    if (this.props.currentUser) {
      // add to cart
      const carts = this.props.carts;
      const mostRecentCartId = Math.max(...Object.keys(carts));
      const cart = carts[mostRecentCartId];
      const cartItem = {
        cart_id: cart.id,
        item_id: parseInt(this.props.itemId),
        item_quantity: parseInt(this.state.quantity)
      };
      this.props.addCartItem(cartItem)
        .then(() => this.handlePurchase(cart.id));
    } else {
      this.props.showModal();
    }
  }

  handleAddToCart(e) {
    if (this.props.currentUser) {
      const carts = this.props.carts;
      const mostRecentCartId = Math.max(...Object.keys(carts));
      const cart = carts[mostRecentCartId];
      const cartItem = {
        cart_id: cart.id,
        item_id: parseInt(this.props.itemId),
        item_quantity: parseInt(this.state.quantity)
      };
      this.props.addCartItem(cartItem)
        .then(() => this.props.history.push('/cart'));
    } else {
      this.props.showModal();
    }
  }

  render() {
    return (
      <div className='add-to-cart-form'>
        <p>Quantity</p>
        <div className='select-item-quantity'>
          <select value={this.state.quantity} onChange={this.handleChange}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
          </select>
        </div>
        <div className='add-to-cart-button'>
          <FlatButton label="Buy it now >" className="buy-it-now"
            onTouchTap={this.handleBuyItNow} />
          <FlatButton label="Add to cart" className="primary"
            onTouchTap={this.handleAddToCart} style={{width: '100%'}}/>
        </div>
      </div>
    );
  }
}

export default AddToCartForm;
