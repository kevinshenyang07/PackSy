import React from 'react';
import { Link } from 'react-router-dom';

import SessionFormContainer from './session_form/session_form_container';

const Logo = () => (
  <Link to="/" className="header-link">
    <nav className="logo">
      <img src="/assets/logo.png" />
      <h2>PackUp</h2>
    </nav>
  </Link>
);

const NavBar = () => (
  <nav className="nav">
    <nav className="navbar">
      <Logo />
      <SessionFormContainer />
    </nav>
  </nav>
);

export default NavBar;
