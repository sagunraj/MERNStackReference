import React, { Component } from 'react'
import {ThemeContext} from '../ThemeProvider';
import Switch from 'react-switch';
export default class Header extends Component {
  render() {
    return (
       <ThemeContext.Consumer>
           {(value)=>(
               <div class={`header ${value.theme}`}>
               <Switch onChange = {value.toggleTheme} checked = {value.checked}/><br/>
               Header
               </div>
           )}
       </ThemeContext.Consumer>
    )
  }
}
