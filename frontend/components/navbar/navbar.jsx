import React from 'react';
import AppBar from 'material-ui/AppBar';
// import IconButton from 'material-ui/IconButton';

import { Link } from 'react-router-dom';

import SearchFormContainer from './search_form/search_form_container';
import SessionFormContainer from './session_form/session_form_container';

const NavBar = () => (
  <AppBar
    title={
      <div className="navbar-left">
        <Link to="/" className="title">Packsy</Link>
        <SearchFormContainer />
      </div>}
    iconElementLeft={<span></span>}
    iconElementRight={<SessionFormContainer />}
    className="navbar"
  />
);

export default NavBar;
