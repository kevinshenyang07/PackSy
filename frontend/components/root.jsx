import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

import App from './app';
// and all containers that need route info


const Root = ({ store }) => (
  <Provider>
    <HashRouter>
      <Route path="/" component={ App } />
    </HashRouter>
  </Provider>
);

export default Root;
