import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Error from './components/Error';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/" exact={true} component = {Home}/>
        <Route path="/about" component = {About}/>
        <Route path="/contact" component = {Contact}/>
        <Route component = {Error}/>
        </Switch>
      </div>
    );
  }
}

export default App;
