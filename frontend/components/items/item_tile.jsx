import React from 'react';
import { Link } from 'react-router-dom';

import { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ActionAddShoppingCart
  from 'material-ui/svg-icons/action/add-shopping-cart';

import PaperForGridTile from './paper_for_gridtile';
import styles from './item_page_styles';

class ItemTile extends React.Component {

  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);

  }

  // imeplement if need to directly add to cart
  addToCart(e) {
    e.preventDefault();
  }

  render() {
    const item = this.props.item;
    const link = `/items/${item.id}`;
    const actionIcon = this.props.hasCartIcon
      ? <IconButton onTouchTap={this.addToCart}
          iconStyle={{zIndex: -1, position: 'relative'}}>
          <ActionAddShoppingCart color="white" />
        </IconButton>
      : <div></div>;

    return (
      <Link to={link}>
        <GridTile
          key={`gridtile-${item.id}`}
          title={item.title}
          subtitle={<span>${item.price}</span>}
          containerElement={<PaperForGridTile />}
          actionIcon={actionIcon}
          titleStyle={styles.gridTileTitle}
          subtitleStyle={styles.gridTileSubtitle}
        >
          <img src={item.imgUrl} />
        </GridTile>
      </Link>
    );
  }

}

export default ItemTile;
