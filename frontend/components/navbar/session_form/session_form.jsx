import React from 'react';
import { withRouter } from 'react-router-dom';

import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import getRandomDemoUserEmail from '../../../util/demo_util';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      open: false,
      logIn: false,
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSignout = this.handleSignout.bind(this);
    this.switchForms = this.switchForms.bind(this);

    this.demoLogin = this.demoLogin.bind(this);
    this.fillDemoEmail = this.fillDemoEmail.bind(this);
    this.fillDemoPassword = this.fillDemoPassword.bind(this);
  }

  handleOpen(logIn) {
    this.setState({open: true, logIn});
  }

  handleClose() {
    this.setState({open: false});
    this.props.clearErrors();
  }


  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    if (this.state.logIn) {
      this.props.signin(user);
      this.setState({ email: "", password: "" });
    } else {
      this.props.signup(user);
      this.setState({
         email: "", password: "",
         firstname: "", lastname: ""
      });
    }
    this.props.history.push('/items');
  }

  handleSignout(e) {
    e.preventDefault();
    this.props.signout();
    this.setState({ open: false });
    this.props.history.push('/');
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  formHeader() {
    return (this.state.logIn) ?
      <h3>Log in to PackUp</h3> :
        <h3>Join PackUp</h3>;
  }

  formButton() {
    return (this.state.logIn) ? <h3>Log in</h3> : <h3>Sign up</h3>;
  }

  formUserName() {
    if (!this.state.logIn) {
      return (
        <span className="first-last-name">
          <label htmlFor="un"></label>
          <br/>
          <input
            type="text"
            value={this.state.firstname}
            onChange={this.update('firstname')}
            className="login-input-half"
            placeholder="First Name"
          />
          <label htmlFor="un"></label>
          <br/>
          <input
            type="text"
            value={this.state.lastname}
            onChange={this.update('lastname')}
            className="login-input-half"
            placeholder="Last Name"
          />
        </span>
      );
    }
  }

  switchForms() {
    this.setState({
      logIn: !this.state.logIn
    });
    this.props.clearErrors();
  }

  switchButton() {
    return (this.state.logIn) ?
      <p>Don't have an account? Sign up</p> :
        <p>Already have an account? Log in</p>;
  }

  demoLogin(e) {
    e.preventDefault();
    this.props.clearErrors();
    this.setState({ email: "", password: "", logIn: true });
    const demoUserEmail = getRandomDemoUserEmail();
    const emailChars = demoUserEmail.split("");
    this.fillDemoEmail(emailChars);
  }

  fillDemoEmail(emailChars) {
    if (emailChars.length > 0) {
      setTimeout(() => {
        this.setState({ email: this.state.email + emailChars.shift()});
        this.fillDemoEmail(emailChars);
      }, 60);
    } else {
      const pwChars = "123456".split("");
      this.fillDemoPassword(pwChars);
    }
  }

  fillDemoPassword(pwChars) {
    if (pwChars.length > 0) {
      setTimeout(() => {
        this.setState({
          password: this.state.password + pwChars.shift()
        });
        this.fillDemoPassword(pwChars);
      }, 60);
    } else {
      const e = { preventDefault: () => {}};
      this.handleSubmit(e);
    }
  }

  render() {
    const actions = [];

    if (this.props.currentUser) {
      return (
        <nav className="login-signup">
          <h2>{`Hi, ${this.props.currentUser.firstname}!`}</h2>
          <FlatButton label="Log Out" onTouchTap={this.handleSignout} />
        </nav>
      );
    } else {
      return (
        <nav className="login-signup">
          <FlatButton label="Log In"
            onTouchTap={this.handleOpen.bind(this, true)} />
          <FlatButton label="Sign Up"
            onTouchTap={this.handleOpen.bind(this,false)} />

          <Dialog
            modal={true}
            open={this.state.open}
            >

            <div className="login-form-container">
              <div className="x-button">
                <button onClick={this.handleClose}>
                  <i className="fa fa-times" aria-hidden="true"></i>
                </button>
              </div>


              <form className="login-form-box">
                  <br/>
                {this.formHeader()}
                  <br/>
                {this.renderErrors()}

                <div className="login-form">

                  { this.formUserName() }

                  <label htmlFor="un"></label>
                  <br/>
                  <input id="un"
                    type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                    className="login-input"
                    placeholder="Email"
                  />

                  <label htmlFor="pw"></label>

                  <input id="pw"
                    type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="login-input"
                    placeholder="Password"
                  />
                  <br/>
                  <RaisedButton label={ this.state.logIn ? "Log In" : "Sign Up"}
                    onTouchTap={this.handleSubmit} />
                  <p>or</p>
                  <RaisedButton label="Demo Login"
                    onTouchTap={this.demoLogin} />
                  <a href="/#" onClick={this.switchForms}>
                    {this.switchButton()}
                  </a>
                </div>
              </form>
            </div>
          </Dialog>
        </nav>
      );
    }
  }
}

export default withRouter(SessionForm);
