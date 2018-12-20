import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Section/>
        <Footer/>
      </div>
    );
  }
}

export default App;
