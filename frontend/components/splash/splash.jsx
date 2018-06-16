import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions,
  CardMedia, CardTitle, CardText} from 'material-ui/Card';

import ItemSpecialContainer from '../items/item_special_container';

class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.toItemIndexPage = this.toItemIndexPage.bind(this);
    this.handleOpen = this.handleOpen.bind(this);

  }

  toItemIndexPage() {
    this.props.history.push('/items');
  }

  handleOpen() {
    this.props.showModal();
  }

  // pic version
  // render() {
  //   return (
  //     <section className="hero-image">
  //   		<section className="hero-text">
  //   				<h1>Let's go places</h1>
  //   				<h4>the right travel items, carefully chosen for you</h4>
  //   				<button onClick={this.loadDemo}>Demo Login</button>
  //   		</section>
  //   	</section>
  //   );
  // }

  // video version
  render() {
    const splashButton = this.props.hasCurrentUser ?
      <FlatButton label="Go Back to Shopping" className="primary"
        onTouchTap={this.toItemIndexPage} style={{width: "auto"}}/> :
      <FlatButton label="Demo Login" className="primary"
        onTouchTap={this.handleOpen} style={{width: "auto"}}/>;

    return (
      <div className="splash">
        <section className="hero-text">
            <h4>Where is your next destination?</h4>
            <p>Explore items that make your trips more cheerful.</p>
            {splashButton}
        </section>
        <div className="back-video-container">
          <video autoPlay muted preload loop className="back-video">
           <source 
             src="https://res.cloudinary.com/kevinsy07/video/upload/ac_none/v1500527170/bg-video_e8rso7.mp4"
             type="video/mp4" 
           />
           <img src="https://res.cloudinary.com/kevinsy07/image/upload/v1529172407/bg-backup_hdzxy0.jpg"  />
          </video>
        </div>
        <section className="item-special">
          <ItemSpecialContainer />
        </section>
      </div>
    );

  }
}

export default Splash;
