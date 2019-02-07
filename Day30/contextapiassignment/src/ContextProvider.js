import React, { Component, createContext } from "react";

export const LanguageContext = createContext();
export const ThemeContext = createContext();
export default class ContextProvider extends Component {
  state = {
    language: "english",
    checked: false,
    themeChecked: false,
    theme: ""
  };

  toggleLanguage = () => {
    if (this.state.language === "english") {
      this.setState({ language: "nepali", checked: true });
    } else {
      this.setState({ language: "english", checked: false });
    }
  };

  toggleTheme = () => {
    this.state.theme === ""
      ? this.setState({ theme: "dark", themeChecked: true })
      : this.setState({ theme: "", themeChecked: false });
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          toggleTheme: this.toggleTheme,
          themeChecked: this.state.themeChecked
        }}
      >
        <LanguageContext.Provider
          value={{
            language: this.state.language,
            checked: this.state.checked,
            toggleLanguage: this.toggleLanguage
          }}
        >
          {this.props.children}
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    );
  }
}
