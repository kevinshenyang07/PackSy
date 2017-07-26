import React from 'react';

import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

import ActionShoppingCart
  from 'material-ui/svg-icons/action/shopping-cart';
import ActionSettings from 'material-ui/svg-icons/action/settings';

class Greetings extends React.Component {
  constructor(props) {
    super(props);

    this.handleSignout = this.handleSignout.bind(this);
    this.reloadPage = this.reloadPage.bind(this);
    this.toOuterLink = this.toOuterLink.bind(this);
  }

  handleSignout(e) {
    e.preventDefault();
    this.props.signout();
    this.props.history.push('/');
  }

  reloadPage() {
    window.location.reload();
  }

  toOuterLink(url) {
    window.location.assign(url);
  }

  render() {
    const badgeStyle = {
      backgroundColor: "#DA552F", color: 'white',
      top: -4, right: -4
    };

    return (
      <nav className="navbar-right">
        <div><h4>{`Hi, ${this.props.username}!`}</h4></div>

        <Badge badgeContent={10} style={{padding: 0}}
          badgeStyle={badgeStyle}>
          <IconButton tooltip="Go to my cart">
            <ActionShoppingCart color="#797979" />
          </IconButton>
        </Badge>
        <IconMenu iconButtonElement={
          <IconButton><ActionSettings color="#797979" />
          </IconButton>
        }>
          <MenuItem primaryText="My Purchases" onTouchTap={this.reloadPage}/>
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
  }
}

export default Greetings;
