import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 200,
    }
  });

const SelectVersion = ({ classes }) => (
    <FormControl className = {classes.formControl}>
          <InputLabel>Select Version</InputLabel>
          <Select>
            <MenuItem>MacPractice</MenuItem>
            <MenuItem>iPad - iEHR</MenuItem>
            <MenuItem>Web - erx.macpractice.net</MenuItem>
            <MenuItem>TicketTracker</MenuItem>
          </Select>
        </FormControl>
   );
export default withStyles(styles)(SelectVersion); 