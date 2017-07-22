import React from 'react';
import {Card, CardActions,
  CardMedia, CardTitle, CardText} from 'material-ui/Card';

import DemoLoginContainer from '../navbar/session_form/demo_login_container';

class Splash extends React.Component {
  constructor(props) {
    super(props);
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
    return (
      <section>
        <section className="hero-text">
            <h1>Let's go places</h1>
            <h4>the right travel items, carefully chosen for you</h4>
            <DemoLoginContainer />
        </section>
        <video autoPlay muted preload className="back-video">
         <source src="https://res.cloudinary.com/kevinsy07
          /video/upload/v1500527170/bg-video_e8rso7.mp4" type="video/mp4" />
          Your browser does not support the <code>video</code> tag.
        </video>
      </section>
    );
  }

}

export default Splash;
