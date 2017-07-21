import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import ActionAddShoppingCart
  from 'material-ui/svg-icons/action/add-shopping-cart';
import CircularProgress from 'material-ui/CircularProgress';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: 20
  },
  gridList: {
    width: 1000,
    height: 900,
    overflowY: 'auto',
  },
};

class ItemIndex extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    const items = this.props.items.byId;
    console.log(items);
    const tiles = Object.keys(items).map(k => {
      const item = items[k];
      return (
        <GridTile
          key={k}
          title={item.title}
          subtitle={<span>by <b>{item.producer}</b></span>}
          actionIcon={<IconButton>
            <ActionAddShoppingCart color="white" /></IconButton>}
        >
          <img src={item.imgUrl} />
        </GridTile>
      );
    });

    // if empty
    if (Object.keys(items).length !== 0) {
      return (
        <div style={styles.root}>
          <GridList cellHeight={300} style={styles.gridList}
            cols={4}>
            <Subheader>{``}</Subheader>
              {tiles}
          </GridList>
        </div>
      );
    } else {
      return (
        <div>
          <CircularProgress color='#202020' />
        </div>
      );
    }

  }

}

export default ItemIndex;
