import React from 'react';
import { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './header';
import Signin from './auth/signin';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route path="/signin" component={Signin} />
      </div>
    );
  }
}
