import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dance from './Dance';

class App extends Component {
  render() {
    return (
     <div>
       Click on the image to see the dance.
       <hr/>
       <Dance/>
     </div>
    );
  }
}

export default App;
