import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import User from './screens/User';
import UserDetails from './screens/UserDetails';
import PostScreen from './screens/PostScreen';
class App extends Component {
  render() {
    return (
      <div className="App">
       <Switch>
         <Route path="/" exact = {true} component = {User}/>
          <Route path="/user-details" component = {UserDetails}/>
          <Route path="/post" component = {PostScreen}/>
       </Switch>
      </div>
    );
  }
}

export default App;
