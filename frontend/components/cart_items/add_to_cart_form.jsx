import React from 'react';

import FlatButton from 'material-ui/FlatButton';

class AddToCartForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: '1'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.props.fetchCarts();
    }
  }

  handleChange(e) {
    this.setState({ quantity: e.target.value });
  }

  // redirect to index page if not signed in
  handleSubmit(e) {
    e.preventDefault();

    if (this.props.currentUser) {
      const carts = this.props.carts;
      const mostRecentCartId = Math.max(...Object.keys(carts));
      const cart = carts[mostRecentCartId];
      const cartItem = {
        cart_id: cart.id,
        item_id: parseInt(this.props.itemId),
        item_quantity: parseInt(this.state.quantity)
      };

      this.props.addCartItem(cartItem);
      this.props.history.push('/cart');
    } else {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div className='add-to-cart-form'>
        <ul>
          <li>Quantity</li>
          <li>
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
          </li>
          <li>
            <FlatButton label="Add to cart" className="primary"
              onTouchTap={this.handleSubmit} />
          </li>
        </ul>
      </div>
    );
  }
}

export default AddToCartForm;
