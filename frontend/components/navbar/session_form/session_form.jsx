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
      firstname: '',
      lastname: '',
      modalOpen: false,
      logIn: false,
    };

    this._DEMO_EMAIL = 'aaron.w@gmail.com';
    this._DEMO_PASS = '123456';

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSignout = this.handleSignout.bind(this);
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

  handleSignout(e) {
    e.preventDefault();
    this.props.signout();
    this.setState({ modalOpen: false });
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
      }, 100);
    } else {
      const e = { preventDefault: () => {}};
      this.handleSubmit(e);
    }
  }

  // render multiple errors
  // renderErrors() {
  //   return(
  //     <ul>
  //       {this.props.errors.map((error, i) =>(
  //         <li key={`error-${i}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  // render the first error
  renderErrors() {
    return (
      <ul><li>
        {this.props.errors[0]}
      </li></ul>
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
      // style.content.height = '550px';
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
    } else {
      // style.content.height = '450px';
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

  render() {
    if (this.props.currentUser) {
      return (
        <nav className="login-signup">
          <h2>{`Hi, ${this.props.currentUser.firstname}!`}</h2>
          <button onClick={this.handleSignout}>Log Out</button>
        </nav>
      );

    } else {

      return (
        <nav className="login-signup">
          <button onClick={this.openModal.bind(this, true)}>Login</button>
          <button onClick={this.openModal.bind(this, false)}>Sign up</button>

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
                  <button onClick={this.handleSubmit}>
                    {this.formButton()}
                  </button>
                  <p>or</p>
                  <button onClick={this.loadDemo}><h3>Demo LogIn</h3></button>
                  <a href="/#" onClick={this.switchForms}>
                    {this.switchButton()}
                  </a>
                </div>
              </form>
            </div>
          </Modal>
        </nav>
      );
    }
  }

}

export default SessionForm;
