import React from 'react';
import { Link } from 'react-router-dom';

import Paper from 'material-ui/Paper';
import { GridList } from 'material-ui/GridList';
import CircularProgress from 'material-ui/CircularProgress';

import FilterTopContainer from './filters/filter_top_container';
import FilterLeftContainer from './filters/filter_left_container';
import ItemTile from './item_tile';
import styles from './item_page_styles';


class ItemIndex extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    // if component hasn't done RECEIVE_ITEMS
    // if (this.props.items.byPrice.length === 0) {
    //   setTimeout(this.props.fetchItems, 500);
    // }
    setTimeout(() => {
      if (this.props.items.byPrice.length === 0) {
        this.props.fetchItems();
      }
    }, 1000);
  }

  render() {
    const byId = this.props.items.byId;
    const items = this.props.items.filtered.map(id => byId[id]);
    const tiles = Object.keys(items).map(k => {
      const item = items[k];
      return (<ItemTile item={item} cartIcon={true} key={item.id} />);
    });

    // if empty
    if (this.props.items.byPrice.length !== 0) {
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
