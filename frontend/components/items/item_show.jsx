import React from 'react';

class ItemShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger;
    this.props.fetchItem(this.props.itemId);
  }


  render() {
    const item = this.props.item;
    if (item) {
      return (
        <div>
          <ul>
            <li>{item.price}</li>
            {item.description.split('\n').map((line, i) =>
              <li key={i}>{line}</li>)}
          </ul>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }

}

export default ItemShow;
