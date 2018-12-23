import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from '../src/class_components/Homepage';
import Hello from './Hello';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Homepage/>
      </div>
    );
  }
}

export default App;
