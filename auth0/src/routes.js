import React from 'react';
import {Route, IndexRedirect} from 'react-router';
import AuthService from './utils/AuthService';
import App from './App';
import Home from './components/Home';
import Login from './components/Login';

const auth = new AuthService('45zGBC0duBhug2Vk8CDnFWY7Mcdvk6IE', 'vsangk.auth0.com');

// validate authentication for private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' });
  }
};

export const makeMainRoutes = () => {
  return (
    <Route path="/" component={App} auth={auth}>
      <IndexRedirect to="/home" />
      <Route path="home" component={Home} onEnter={requireAuth} />
      <Route path="login" component={Login} />
    </Route>
  );
};

export default makeMainRoutes;
