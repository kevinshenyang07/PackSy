import React from 'react';
import { GridList } from 'material-ui/GridList';

import ItemTile from './item_tile';
import styles from './item_page_styles';


class ItemSpecial extends React.Component {

  constructor(props) {
    super(props);
    this.specials = {
      2: null,
      10: null,
    };
  }

  componentDidMount() {
    // if (Object.keys(this.props.items.byId).length <= 2) {
    const byId = Object.keys(this.props.items.byId);
    if (!byId.includes("2")) this.props.fetchItem(2);
    if (!byId.includes("10")) this.props.fetchItem(10);
    // }
  }

  render() {
    const byId = this.props.items.byId;
    let tiles;
    if (byId["2"] && byId["10"]) {
      this.specials["2"] = byId["2"];
      this.specials["10"] = byId["10"];
      tiles = Object.keys(this.specials).map(id => {
        const item = this.specials[id];
        return <ItemTile item={item} cartIcon={false} key={item.id}/>;
      });
    }
    // if empty
    if (this.specials["2"] && this.specials["10"]) {
      return (
        <div>
          <p>Today's Special</p>
          <GridList cellHeight={230} cols={1} padding={18}>
            {tiles}
          </GridList>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }

  }
}

export default ItemSpecial;
