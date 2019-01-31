import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch, NavLink, Link} from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import SearchComponent from './components/SearchComponent';
import UserDetailsComponent from './components/UserDetailsComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link to="/" className="navbar-brand">GitHub Search App</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <NavLink to="/" exact className="nav-item nav-link">Home</NavLink>
      <NavLink to="search" className="nav-item nav-link">Search</NavLink>
      <NavLink to="about" className="nav-item nav-link">About</NavLink>
    </div>
  </div>
</nav>
      <Switch>
        <Route path="/" exact={true} component = {HomeComponent}/>
        <Route path="/about" component = {AboutComponent}/>
        <Route path="/search" component = {SearchComponent}/>
        <Route path="/user-details" component = {UserDetailsComponent}/>
      </Switch>
      </div>

    );
  }
}

export default App;
