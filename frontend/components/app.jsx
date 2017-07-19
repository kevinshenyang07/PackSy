import React from 'react';
import { Provider } from 'react-redux';
import { Route, Link } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import NavBar from './navbar/navbar';
import SplashContainer from  './splash/splash_container';

const App = () => (
  <div>
    <NavBar />
    <main className="main">
      <Route exact path="/" component={SplashContainer} />
    </main>

  </div>
);

export default App;
