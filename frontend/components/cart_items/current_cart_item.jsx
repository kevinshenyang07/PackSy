import React from 'react';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';

class CurrentCartItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.cartItem.item_quantity
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
    this.props.updateCartItem({
      id: this.props.cartItem.id,
      item_quantity: e.target.value
    });
  }

  handleRemove() {
    this.props.deleteCartItem(this.props.cartItem.id);
  }

  render() {
    const cartItem = this.props.cartItem;
    const price = parseFloat(this.props.cartItem.price).toFixed(2);

    if (cartItem) {
      return (
        <li className='cart-item'>
          <ul>
            <li>
              <Link to={ `/items/${cartItem.itemId}` }>
                <img className='cart-item-image' src={cartItem.imgUrl} />
              </Link>
            </li>
          </ul>
          <div className='cart-item-details'>
            <span className='cart-item-name'>
              { this.props.cartItem.title }
            </span>
            <li className='cart-item-seller'>
              {`Sold by: ${this.props.cartItem.producer}`}
            </li>
            <li className='remove-button'>
              <p className="remove-button" onClick={this.handleRemove}>
                Remove
              </p>
            </li>
          </div>
          <div className='cart-item-quantity'>
            <form>
              <select value={this.state.value} onChange={this.handleChange}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>
            </form>
          </div>
          <div className='cart-item-price'>
            <li >
              <b>{`$${price}`}</b>
            </li>
          </div>
        </li>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default CurrentCartItem;
