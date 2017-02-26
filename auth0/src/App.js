import React, { Component } from 'react';
import Auth0Lock from 'auth0-lock';
import { CLIENT_ID, DOMAIN } from './utils/constants';
import Login from './components/Login';
import './App.css';

class App extends Component {
  componentWillMount() {
    this.lock = new Auth0Lock(CLIENT_ID, DOMAIN);
  }

  render() {
    return (
      <Login lock={this.lock} />
    );
  }
}

export default App;
