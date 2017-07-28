import React from 'react';

import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

import ActionShoppingCart
  from 'material-ui/svg-icons/action/shopping-cart';
import ActionSettings from 'material-ui/svg-icons/action/settings';

const badgeStyle = {
  backgroundColor: "#DA552F", color: 'white',
  top: -4, right: -4
};


class Greetings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    };

    this.handleSignout = this.handleSignout.bind(this);
    this.toCart = this.toCart.bind(this);
    this.toPurchases = this.toPurchases.bind(this);
    this.toOuterLink = this.toOuterLink.bind(this);
  }

  componentDidMount() {
    this.props.fetchCartItems().then(() => this.setState({ loaded: true }));
    if (!this.props.cartLoaded) {
      this.props.fetchCarts();
    }
  }

  handleSignout(e) {
    e.preventDefault();
    this.props.signout();
    this.props.history.push('/');
  }

  toCart() {
    this.props.history.push('/cart');
  }

  toPurchases() {
    this.props.history.push('/purchases');
  }

  toOuterLink(url) {
    window.location.assign(url);
  }

  render() {
    if (this.state.loaded) {
      return (
        <nav className="navbar-right">
          <div><h4>{`Hi, ${this.props.currentUser.firstname}!`}</h4></div>

          <Badge badgeContent={this.props.cartItemCount}
            style={{padding: 0}} badgeStyle={badgeStyle}>
            <IconButton onTouchTap={this.toCart} tooltip="Go to my cart" >
              <ActionShoppingCart color="#797979" />
            </IconButton>
          </Badge>
          <IconMenu iconButtonElement={
            <IconButton><ActionSettings color="#797979" /></IconButton>}>
            <MenuItem primaryText="My Purchases" onTouchTap={this.toPurchases}/>
            <MenuItem primaryText="Creator's Github"
              onTouchTap={this.toOuterLink.bind(
                this, 'https://github.com/kevinshenyang07')} />
            <MenuItem primaryText="Creator's LinkedIn"
              onTouchTap={this.toOuterLink.bind(
                this, 'https://www.linkedin.com/in/kevinshenyang07')} />
            <Divider />
            <MenuItem primaryText="Sign out" onTouchTap={this.handleSignout}/>
          </IconMenu>
        </nav>
      );

    } else {
      return <div></div>;
    }

  }
}

export default Greetings;
