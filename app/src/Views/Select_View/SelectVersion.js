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
            <MenuItem>7.3.3-638</MenuItem>
            <MenuItem>7.3.3-682</MenuItem>
            <MenuItem>9.9.2-16</MenuItem>
            <MenuItem>9.9.5-18</MenuItem>
            <MenuItem>9.9.6-8</MenuItem>
            <MenuItem>10.0.0-1</MenuItem>
            <MenuItem>10.0.0-105</MenuItem>
            <MenuItem>10.0.0-125</MenuItem>
          </Select>
        </FormControl>
   );
export default withStyles(styles)(SelectVersion); 