import React, { Component } from "react";
import NavBar from "./NavBar.js";
import Main from "./Main.js";
import Footer from "./Footer.jsx";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
