import React from 'react';

import Paper from 'material-ui/Paper';
import { GridList, GridTile } from 'material-ui/GridList';
import PaperForGridTile from './paper_for_gridtile';
import IconButton from 'material-ui/IconButton';
import ActionAddShoppingCart
  from 'material-ui/svg-icons/action/add-shopping-cart';

import styles from './item_index_styles';


class ItemSpecial extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    if (Object.keys(this.props.items.byId).length === 0) {
      this.props.fetchItem(2);
      this.props.fetchItem(10);

    }
  }

  render() {
    const byId = this.props.items.byId;
    const items = [];
    if (byId["2"] && byId["10"]) {
      items.push(byId["2"], byId["10"]);
    }
    const tiles = items.map(item => {
      const price = item.price.split(".")[1].length !== 2
        ? (item.price + "0") : item.price;
      return (
        <GridTile
          key={`gridtile-${item.id}`}
          title={item.title}
          subtitle={<span>${price}</span>}
          containerElement={<PaperForGridTile />}
          actionIcon={<IconButton>
            <ActionAddShoppingCart color="white" />
          </IconButton>}
        >
          <img src={item.imgUrl} />
        </GridTile>
      );
    });

    // if empty
    if (items.length !== 0) {
      return (
        <GridList cellHeight={230} cols={1} padding={18}>
          {tiles}
        </GridList>
      );
    } else {
      return (
        <div></div>
      );
    }

  }
}

export default ItemSpecial;
