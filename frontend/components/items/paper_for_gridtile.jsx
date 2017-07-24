import React from 'react';
import Paper from 'material-ui/Paper';
import _ from 'lodash';

class PaperForGridTile extends React.Component {
  render() {
    return (
        <Paper
          {...this.props}
          style={_.omit(this.props.style, [ 'muiPrepared' ])}
        />
    );
  }
}

export default PaperForGridTile;
