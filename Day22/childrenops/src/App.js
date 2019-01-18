import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Card from './Card';
import CheckAuthorization from './CheckAuthorization';
class App extends Component {
  state = {
    authorized: false,
  }
  render() {
    return (
      <div className="App">
       <Button color="blue">
         Button text
       </Button>
       <Card img = {logo}>
         This is a simple card.
       </Card>
      </div>
    );
  }
}

export default CheckAuthorization(App);