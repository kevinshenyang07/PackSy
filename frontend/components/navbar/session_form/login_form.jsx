import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import style from './modal_style';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      modalOpen: false,
    };

    this._DEMO_EMAIL = 'aaron.w@gmail.com';
    this._DEMO_PASS = '123456';

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.switchForms = this.switchForms.bind(this);

    this.loadDemo = this.loadDemo.bind(this);
    this.fillDemoEmail = this.fillDemoEmail.bind(this);
    this.fillDemoPassword = this.fillDemoPassword.bind(this);

  }

  update(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    if (this.state.logIn) {
      this.props.signin(user);
      this.setState({ email: "", password: "" });
    } else {
      this.props.signup(user);
      this.setState({ email: "", password: "" });
    }
  }

  loadDemo(e) {
    e.preventDefault();
    this.setState({ email: "", password: "", logIn: true });
    const emailChars = this._DEMO_EMAIL.split("");
    this.fillDemoEmail(emailChars);
  }

  fillDemoEmail(emailChars) {
    if (emailChars.length > 0) {
      setTimeout(() => {
        this.setState({ email: this.state.email + emailChars.shift()});
        this.fillDemoEmail(emailChars);
      }, 120);
    } else {
      const pwChars = this._DEMO_PASS.split("");
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
      }, 120);
    } else {
      const e = { preventDefault: () => {}};
      this.handleSubmit(e);
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) =>(
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  closeModal() {
    this.setState({ modalOpen: false });
    // style.content.opacity = 0;
    this.props.clearErrors();
  }

  openModal(bool) {
    this.setState({
      modalOpen: true,
      logIn: bool
    });
    // style.content.opacity = 100;
  }

  render() {
    return (
      <div>
        <button onClick={this.loadDemo}>Demo Login</button>
        <Modal
          contentLabel="Modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={style}>

          <div className="login-form-container">
            <div className="x-button">
              <button onClick={this.closeModal}>
                <i className="fa fa-times" aria-hidden="true"></i>
              </button>
            </div>


            <form className="login-form-box">
                <br/>
              <h3>Log in to PackUp</h3>
                <br/>
              {this.renderErrors()}

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
                <button onClick={this.handleSubmit}>
                  {this.formButton()}
                </button>
                <p>or</p>
                <button onClick={this.loadDemo}><h3>Demo LogIn</h3></button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}


export default SessionForm;
