import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import Card from './components/Card';
import Footer from './components/Footer';
import ThemeProvider from './ThemeProvider';

class App extends Component {
  render() {
    return (
      <ThemeProvider>
      <div className="App">
        <Header/>
        <Section/>
        <Card/>
        <Footer/>
      </div>
      </ThemeProvider>
    );
  }
}

export default App;
