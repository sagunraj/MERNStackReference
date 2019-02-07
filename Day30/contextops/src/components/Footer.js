import React from 'react'
import {ThemeContext} from '../ThemeProvider';
export default function Footer() {
  return (
        <ThemeContext.Consumer>
            {(value)=>(<div className={`footer ${value.theme}`}>
                Footer
            </div>)}
        </ThemeContext.Consumer>
  )
}
