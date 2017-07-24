import React from 'react';
import { withRouter } from 'react-router-dom';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


import getRandomDemoUserEmail from '../../../util/demo_util';

class DemoLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      open: false,
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.demoLogin = this.demoLogin.bind(this);
    this.fillDemoEmail = this.fillDemoEmail.bind(this);
    this.fillDemoPassword = this.fillDemoPassword.bind(this);

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser) {
      this.props.history.push('/items');
    }
  }

  update(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signin(user);
    this.setState({ email: "", password: "" });
    this.handleClose();
    // this.props.history.push('/items');
  }

  demoLogin(e) {
    // e.preventDefault();
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

  handleOpen() {
    this.setState({open: true});
    this.demoLogin();
  }

  handleClose() {
    this.setState({open: false});
  }

  render() {

    return (
      <div>
        <FlatButton label="Go Explore" className="primary"
          onTouchTap={this.handleOpen} style={{width: "auto"}}/>
        <Dialog
          modal={true}
          open={this.state.open}
          contentStyle={{width: "30%", minWidth: "300px"}}
        >

          <div className="login-form-container">
            <div className="x-button">
              <button onClick={this.handleClose}>
                <i className="fa fa-times" aria-hidden="true"></i>
              </button>
            </div>


            <form className="login-form-box">
                <br/>
              <h3>Log in to Packsy</h3>
                <br/>

              <div className="login-form">

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
                <FlatButton label="Log In"
                  className="primary" style={{width: "100%"}} />
                <p>or</p>
                <RaisedButton label="Demo Login" style={{width: "100%"}} />
              </div>
            </form>
          </div>

        </Dialog>
      </div>
    );
  }
}


export default withRouter(DemoLogin);
