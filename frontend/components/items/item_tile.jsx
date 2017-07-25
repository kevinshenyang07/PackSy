import React from 'react';
import { Link } from 'react-router-dom';

import { GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ActionAddShoppingCart
  from 'material-ui/svg-icons/action/add-shopping-cart';

import PaperForGridTile from './paper_for_gridtile';
import styles from './item_page_styles';

const ItemTile = ({ item, cartIcon }) => {
  const link = `/items/${item.id}`;
  return (
    <Link to={link}>
      <GridTile
        key={`gridtile-${item.id}`}
        title={item.title}
        subtitle={<span>${item.price}</span>}
        containerElement={<PaperForGridTile />}
        actionIcon={cartIcon ?
          <IconButton>
            <ActionAddShoppingCart color="white" />
          </IconButton> :
          <div></div>}
        titleStyle={styles.gridTileTitle}
        subtitleStyle={styles.gridTileSubtitle}
      >
        <img src={item.imgUrl} />
      </GridTile>
    </Link>
  );
};

export default ItemTile;
