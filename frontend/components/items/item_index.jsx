import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

class ItemIndex extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    const items = this.props.items.byId;
    if (items) {
      const itemList = Object.keys(items).map(
        k => <div key={k}>{items[k].price}</div>);
      return (
        <div>{itemList}</div>
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
