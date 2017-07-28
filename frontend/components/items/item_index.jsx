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

    this.fetchResult = this.fetchResult.bind(this);
    this.decideCols = this.decideCols.bind(this);
  }

  componentDidMount() {
    // pathname : /search/keyword
    const pathname = this.props.location.pathname;
    this.fetchResult(pathname);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      const pathname = nextProps.location.pathname;
      this.fetchResult(pathname);
    }
  }

  fetchResult(pathname) {
    const paths = pathname.split('/');
    if (paths.includes("search")) {
      const searchText = paths[paths.length -1];
      this.props.fetchSearchedItems(searchText);
    } else if (pathname === "/items") {
      // to showcase the loading phase
      setTimeout(this.props.fetchItems, 1000);
    }
  }

  decideCols() {
    return window.innerWidth >= 1200 ? 4 :
            window.innerWidth >= 1000 ? 3 :
              window.innerWidth >= 768 ? 2 : 1;
  }

  render() {
    const byId = this.props.items.byId;
    const items = this.props.items.filtered.map(id => byId[id]);
    const tiles = Object.keys(items).map(k => {
      const item = items[k];
      return (<ItemTile item={item} hasCartIcon={false} key={item.id} />);
    });

    // if empty
    if (this.props.items.byPrice.length !== 0) {
      return (
        <Paper style={styles.root} zDepth={3}>

          <FilterLeftContainer />

          <Paper style={styles.main} zDepth={1}>
            <FilterTopContainer />
            <GridList cellHeight={250} cols={this.decideCols()} padding={18}
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
