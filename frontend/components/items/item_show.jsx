import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';

class ItemShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchItem(this.props.itemId);
  }


  render() {
    const item = this.props.item;
    if (item) {
      return (
        <Paper>
          <div className='item-top'>
            <div className='item-image'>
              <img src={item.imgUrl} alt={ item.title }></img>
            </div>
            <div className='item-detail'>
              <div>
                <ul>
                  <li>{item.price}</li>
                  {item.description.split('\n').map((line, i) =>
                    <li key={i}>{line}</li>)}
                </ul>
              </div>
            </div>
          </div>
          <div className='item-reviews'>

          </div>
        </Paper>

      );
    } else {
      return (
        <div></div>
      );
    }
  }

}

export default ItemShow;
