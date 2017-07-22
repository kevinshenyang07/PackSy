import React from 'react';

import Paper from 'material-ui/Paper';
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
    padding: 20,
  },
  gridList: {
    width: 1000,
    height: 900,
    overflowY: 'hidden',
    justifyContent: 'right'
  },
  paper: {
    height: '100vh',
    width: '100%',
    textAlign: 'center',
    display: 'inline-block',
    padding: 20,
  }
};

class ItemIndex extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    const items = this.props.items.byId;
    if (Object.keys(items).length === 0) {
      setTimeout(this.props.fetchItems, 1000);
    }
  }

  render() {
    const items = this.props.items.byId;
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
        <Paper style={styles.root} zDepth={3}>
          <GridList cellHeight={300} style={styles.gridList}
            cols={4}>
            <Subheader>{``}</Subheader>
              {tiles}
          </GridList>
        </Paper>
      );
    } else {
      return (
        <Paper style={styles.paper} zDepth={3}>
          <CircularProgress color='#DA552F' size={60} thickness={5}/>
        </Paper>
      );
    }

  }

}

export default ItemIndex;
