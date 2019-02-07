import React, { Component } from 'react'
import {LanguageContext, ThemeContext} from './ContextProvider';
import './App.css';

export default class Footer extends Component {
    state = {
        nepali: "फुटर",
        english: "Footer"
    }
  render() {
    return (
        <ThemeContext.Consumer>
        {(theme)=>(
      <LanguageContext.Consumer>
          {(value)=>(<div className={`footer ${theme.theme}`}>
            {value.language==="english" ? this.state.english : this.state.nepali }
          </div>)}
      </LanguageContext.Consumer>
      )}
      </ThemeContext.Consumer>
    )
  }
}
