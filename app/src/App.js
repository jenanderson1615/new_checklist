import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button} from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <div>
        <AppBar>
          <Toolbar>
            MacPractice
            <Button>Checklist</Button>
            <Button>Downloads</Button>
            <Button>Reports</Button>
            <Button>Getting Started</Button>
            <Button>Logout</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default App;
