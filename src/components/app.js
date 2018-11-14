import React from 'react';
import { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './header';
import Signin from './auth/signin';
import Signout from './auth/signout';
import Signup from './auth/signup';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route path="/signin" component={Signin} />
        <Route path="/signout" component={Signout} />
        <Route path="/signup" component={Signup} />
      </div>
    );
  }
}
