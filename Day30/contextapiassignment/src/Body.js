import React, { Component } from "react";
import { LanguageContext, ThemeContext } from "./ContextProvider";
import "./App.css";

export default class Body extends Component {
  state = {
    nepali: "बडी",
    english: "Body"
  };
  render() {
    return (
      <ThemeContext.Consumer>
        {theme => (
          <LanguageContext.Consumer>
            {value => (
              <div className={`body ${theme.theme}`}>
                {value.language === "english"
                  ? this.state.english
                  : this.state.nepali}
              </div>
            )}
          </LanguageContext.Consumer>
        )}
      </ThemeContext.Consumer>
    );
  }
}
