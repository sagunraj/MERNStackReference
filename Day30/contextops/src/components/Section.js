import React, { Component } from 'react'
import {ThemeContext} from '../ThemeProvider';

export default class Section extends Component {
  render() {
    return (
       <ThemeContext.Consumer>

       {(value)=>(
        <div className={value.theme + " section"}>
        Section
      </div>
       )}
       </ThemeContext.Consumer>

    
        
    )
  }
}
