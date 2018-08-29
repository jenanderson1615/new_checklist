import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button } from "@material-ui/core";

const NavBar = () => (
    <AppBar position = "static">
          <Toolbar>
            MacPractice
            <Button>Checklist</Button>
            <Button>Downloads</Button>
            <Button>Reports</Button>
            <Button>Getting Started</Button>
            <Button>Logout</Button>
          </Toolbar>
        </AppBar>
   );
export default NavBar;   