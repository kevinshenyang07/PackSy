import React from 'react';


import Paper from 'material-ui/Paper';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ActionAddShoppingCart
  from 'material-ui/svg-icons/action/add-shopping-cart';

import CircularProgress from 'material-ui/CircularProgress';

import FilterTopContainer from './filters/filter_top_container';
import FilterLeftContainer from './filters/filter_left_container';
import styles from './item_index_styles';


class ItemIndex extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    if (Object.keys(this.props.items.byId).length === 0) {
      setTimeout(this.props.fetchItems, 1000);
    }
  }

  render() {
    const byId = this.props.items.byId;
    const items = this.props.items.filtered.map(id => byId[id]);
    const tiles = Object.keys(items).map(k => {
      const item = items[k];
      const price = item.price.split(".")[1].length !== 2
        ? (item.price + "0") : item.price;
      return (
        <GridTile
          key={`gridtile-${k}`}
          title={item.title}
          subtitle={<span>${price}</span>}
          containerElement={<div><Paper /></div>}
          actionIcon={<IconButton>
            <ActionAddShoppingCart color="white" />
          </IconButton>}
        >
          <img src={item.imgUrl} />
        </GridTile>
      );
    });

    // if empty
    if (Object.keys(byId).length !== 0) {
      return (
        <Paper style={styles.root} zDepth={3}>

          <FilterLeftContainer />

          <Paper style={styles.main} zDepth={1}>
            <FilterTopContainer />
            <GridList cellHeight={250} cols={4} padding={18}
              style={styles.gridList}>
              {tiles}
            </GridList>
          </Paper>

        </Paper>
      );
    } else {
      return (
        <Paper style={styles.loading} zDepth={3}>
          <CircularProgress size={60} thickness={5}/>
        </Paper>
      );
    }

  }

}

export default ItemIndex;
