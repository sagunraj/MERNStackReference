import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import { dark, light } from "../Actions";
class MainPage extends Component {
  render() {
    return (
      <div className={`mainpage ${this.props.theme.theme}`}>
        <div>
          <button onClick={this.props.light}>Light Theme</button>
          <button onClick={this.props.dark}>Dark Theme</button>
        </div>
        <p>This is the main page.</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  theme: state.theme
});

const mapDispatchToProps = dispatch => ({
  dark: () => dispatch(dark()),
  light: () => dispatch(light())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
