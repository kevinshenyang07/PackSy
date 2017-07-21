import React from 'react';
import { Route, Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import NavBar from './navbar/navbar';
import SplashContainer from  './splash/splash_container';
import ItemIndexContainer from './items/item_index_container';
// import ItemShowContainer from './items/item_show_container';
// and all containers that need route info

const App = () => (
  <MuiThemeProvider>
  <div>
    <NavBar />
    <main className="main">
      <Route exact path="/" component={SplashContainer} />
      <Route path="/items" component={ ItemIndexContainer } />
    </main>
  </div>
</MuiThemeProvider>
);

export default App;
