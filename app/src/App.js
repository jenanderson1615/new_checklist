import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import Routes from "./Routes";
import Router from "./Components/Router";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Router routes={Routes}/>
      </div>
    );
  }
}

export default App;
