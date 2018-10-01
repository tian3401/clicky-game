import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './Child'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Child></Child>
      </div>
    );
  }
}

export default App;
