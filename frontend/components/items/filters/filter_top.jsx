import React from 'react';

import Paper from 'material-ui/Paper';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import styles from '../item_index_styles';

class FilterTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: 0,
    };
  }

  render() {
    return (
      <Paper style={styles.filterTop} zDepth={0}>

        <div>
          <br />
          {`found ${this.props.itemsCount} items`}
        </div>

        <DropDownMenu
          value={this.state.sortBy}
          onChange={this.handleChange}
          style={{width: 200, paddingTop: 10}} autoWidth={false}
        >
          <MenuItem value={0} primaryText="Sort by relevance" />
          <MenuItem value={1} primaryText="Sort by highest Price" />
          <MenuItem value={2} primaryText="Sort by lowest Price" />
        </DropDownMenu>
      </Paper>
    );

  }

}

export default FilterTop;
