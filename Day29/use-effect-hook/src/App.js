import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import PeopleComponent from './PeopleComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter/> */}
        <PeopleComponent/>
      </div>
    );
  }
}

export default App;
