import React from "react";
import { Button } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import SelectSoftware from "./SelectSoftware";
import SelectVersion from "./SelectVersion";
import SelectTestingType from "./SelectTestingType";
import blue from '@material-ui/core/colors/blue';

const styles = () => ({
    showChecklistButton: {
      backgroundColor: blue[500]
    }
  });
  

const SelectView = ({ classes }) => (
  <div>
    <SelectSoftware />
    <SelectVersion />
    <SelectTestingType />

    <Button variant="contained" className={classes.showChecklistButton} onClick={checklistView}>
      Show Checklist
    </Button>
  </div>
);

const checklistView = () => {
    window.location.href = "checklist";
  };

export default withStyles(styles)(SelectView);
