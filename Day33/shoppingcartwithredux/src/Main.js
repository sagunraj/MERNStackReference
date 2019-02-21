import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import App from './App';
import Checkout from './Checkout';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
            <Route path = "/" exact component = {App}/>
            <Route path = "/checkout" component = {Checkout}/>
        </Switch>
      </div>
    )
  }
}
