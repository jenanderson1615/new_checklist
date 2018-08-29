import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import NavBar from "./Components/NavBar";
import SelectSoftware from "./Views/Select_View/SelectSoftware";
import SelectVersion from "./Views/Select_View/SelectVersion";
import SelectTestingType from "./Views/Select_View/SelectTestingType";
import blue from '@material-ui/core/colors/blue';

const styles = theme => ({
  showChecklistButton: {
    backgroundColor: blue[500]
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <NavBar/>

        <div>
        <SelectSoftware/>
        <SelectVersion/>
        <SelectTestingType/>

        <Button variant="contained" className={classes.showChecklistButton}>Show Checklist</Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
