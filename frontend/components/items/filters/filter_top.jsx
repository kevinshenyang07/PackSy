import React from 'react';
import { withRouter } from 'react-router-dom';

import Paper from 'material-ui/Paper';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import styles from '../item_page_styles';

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
    const paths = this.props.location.pathname.split('/');
    const searchText = paths.includes("items") ? 'all items'
      : `"${paths[paths.length -1]}"`;
    const message = `Searching for ${searchText},
      found ${this.props.itemsCount} items`;

    return (
      <Paper style={styles.filterTop} zDepth={0}>

        <div>
          <br />
          {message}
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

export default withRouter(FilterTop);
