import React, { Component } from "react";
import NavBar from "./NavBar.js";
import Main from "./Main.js";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        ;<Main />
      </div>
    );
  }
}

export default App;
