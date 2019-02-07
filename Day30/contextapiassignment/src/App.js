import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import ContextProvider from "./ContextProvider";
import Body from "./Body";
import Footer from "./Footer";
class App extends Component {
  render() {
    return (
      <ContextProvider>
        <div className="App">
          <Navbar />
          <Body />
          <Footer />
        </div>
      </ContextProvider>
    );
  }
}

export default App;
