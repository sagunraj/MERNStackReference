import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Todo from './Todo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter/>
        <Todo/>
      </div>
    );
  }
}

export default App;
