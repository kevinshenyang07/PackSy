import React from 'react';
import { Link } from 'react-router-dom';

import LoginFormContainer from '../navbar/session_form/login_form_container';

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

  // <button onClick={this.loadDemo}>Demo Login</button>

  // video version
  render() {
    return (
      <section>
        <section className="hero-text">
            <h1>Let's go places</h1>
            <h4>the right travel items, carefully chosen for you</h4>
            <LoginFormContainer />
        </section>
        <video autoPlay muted preload className="back-video">
         <source src="/assets/bg-video.mp4" type="video/mp4" />
         <source src="/assets/bg-video.mp4" type="video/webm" />
         <source src="/assets/bg-video.mp4" type="video/ogg" />
          Your browser does not support the <code>video</code> tag.
        </video>
      </section>
    );
  }

}

export default Splash;
