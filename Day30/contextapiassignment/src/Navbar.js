import React, { Component } from "react";
import Switch from "react-switch";
import { LanguageContext, ThemeContext } from "./ContextProvider";
import "./App.css";
export default class Navbar extends Component {
  state = {
    nepali: "नेभिगेशन बार",
    english: "Navigation bar",
    languageSwitchNepali: "भाषा स्विच",
    languageSwitchEnglish: "Language Switch",
    themeSwitchNepali: "रंग परिवर्तन गर्नुहोस्",
    themeSwitchEnglish: "Change Theme"
  };
  render() {
    return (
      <ThemeContext.Consumer>
        {theme => (
          <LanguageContext.Consumer>
            {value => (
              <>
                <h3>
                  {value.language === "english"
                    ? this.state.languageSwitchEnglish
                    : this.state.languageSwitchNepali}
                  :{" "}
                  <Switch
                    onChange={value.toggleLanguage}
                    checked={value.checked}
                    className="react-switch"
                    id="material-switch"
                    onColor="#86d3ff"
                    onHandleColor="#2693e6"
                    handleDiameter={20}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                    height={20}
                    width={48}
                  />
                </h3>
                <h3>
                  {value.language === "english"
                    ? this.state.themeSwitchEnglish
                    : this.state.themeSwitchNepali}
                  :{" "}
                  <Switch
                    onChange={theme.toggleTheme}
                    checked={theme.themeChecked}
                    className="react-switch"
                    id="material-switch"
                    onColor="#86d3ff"
                    onHandleColor="#2693e6"
                    handleDiameter={20}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                    height={20}
                    width={48}
                  />
                </h3>
                <div className={`navbar ${theme.theme}`}>
                  {value.language === "english"
                    ? this.state.english
                    : this.state.nepali}
                </div>
              </>
            )}
          </LanguageContext.Consumer>
        )}
      </ThemeContext.Consumer>
    );
  }
}
