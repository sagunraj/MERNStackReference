import React, { Component } from 'react';
import {ThemeContext} from '../ThemeProvider';
export default class Card extends Component {
  render() {
    return (
       <ThemeContext.Consumer>
           {(value)=>(
               <div className={`card ${value.theme}`}>
                    Card
               </div>
           )}
       </ThemeContext.Consumer>
    )
  }
}
