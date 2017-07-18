import React from 'react';
import { withRouter }  from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render() {
    // render a "Log in" or "Sign Up" button base on the formType prop
    // render a list of error messages
    // redirect the user to index if logged in
  }

}

export default withRouter(SessionForm);
