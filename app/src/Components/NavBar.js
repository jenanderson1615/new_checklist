import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button } from "@material-ui/core";

const NavBar = () => (
    <AppBar position = "static">
          <Toolbar>
            MacPractice
            <Button onClick={() => selectView()} >Checklist</Button>
            <Button>Downloads</Button>
            <Button>Reports</Button>
            <Button>Getting Started</Button>
            <Button onClick={() => editChecklistView()} >Edit Checklists</Button>
            <Button>Logout</Button>
          </Toolbar>
        </AppBar>
   );

const selectView  = () => {
    window.location.href = "/";
};

const editChecklistView = () => {
  window.location.href = "/edit_checklist";
};
export default NavBar;   