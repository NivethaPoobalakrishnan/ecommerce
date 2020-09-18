import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Cart from './components/Cart'
import Home from './components/Home'
import Navigation from './Navigation/Navigation'

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Navigation />
      <main>
        <Route path="/" component={Home} exact />
        <Route path="/Cart" component={Cart} />
   
      </main>
    </React.Fragment>
    );
  }
}

export default App;
