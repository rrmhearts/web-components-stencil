import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <uc-stock-price/>
        <uc-stock-finder/>
      </div>
    );
  }
}

export default App;
