import React from 'react';
import { withRouter } from 'react-router-dom';

import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';

import ReviewIndexContainer from '../reviews/review_index_container';

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
        <div className='item-background'>
          <div className='item-show'>

              <div className='item-top'>
                <div className='item-image'>
                  <img src={item.imgUrl}
                    alt="http://via.placeholder.com/570x570">
                  </img>
                </div>

                <div className='item-detail'>
                  <h2>{item.title}</h2>
                  <p>by <b>{item.producer}</b></p>
                  <p>${item.price}</p>
                  <br />
                  <p><b>Overview</b></p>
                  {item.description.split('\n').map((line, i) => {
                      return <li key={i}><span>•</span>{line}</li>;
                  })}
                </div>
              </div>

              <Divider />

              <div className='item-reviews'>
                <ReviewIndexContainer itemId={item.id}/>
              </div>
          </div>
        </div>

      );
    } else {
      return (
        <div></div>
      );
    }
  }

}

export default withRouter(ItemShow);
