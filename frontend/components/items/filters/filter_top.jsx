import React from 'react';

import Paper from 'material-ui/Paper';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import styles from '../item_index_styles';

class FilterTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, key, val) {
    this.setState({sort: val},
      () => this.props.receiveSort(val)
    );
  }

  render() {
    return (
      <Paper style={styles.filterTop} zDepth={0}>

        <div>
          <br />
          {`Found ${this.props.itemsCount} items`}
        </div>

        <DropDownMenu
          value={this.state.sort}
          onChange={this.handleChange}
          style={{width: 220, paddingTop: 10}} autoWidth={false}
        >
          <MenuItem value={0} primaryText="Sort by relevance" />
          <MenuItem value={-1} primaryText="Sort by lowest Price" />
          <MenuItem value={1} primaryText="Sort by highest Price" />
        </DropDownMenu>
      </Paper>
    );

  }

}

export default FilterTop;
