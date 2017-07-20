import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './app';
// import ItemIndexContainer from './items/'
// and all containers that need route info


const Root = ({ store }) => (
  <Provider store = { store }>
    <HashRouter>
      <MuiThemeProvider>
        <Route exact path="/" component={ App } />
      </MuiThemeProvider>
    </HashRouter>
  </Provider>
);

export default Root;
