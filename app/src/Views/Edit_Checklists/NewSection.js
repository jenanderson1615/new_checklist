import React from "react";
import green from "@material-ui/core/colors/green";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const styles = () => ({
  addIconColor: {
    backgroundColor: green[500]
  }
});

const NewSection = props => {
  const { classes } = props;
  return (
    <div>
      <h1>Edit Checklists</h1>
      <h3>New Section</h3>
      <h5>
        Instructions on format and other things can go here. Like 'Please use
        Title Capitalization when adding a new section and double-check your
        spelling or have someone check it for you before saving the new section"
        or something along those lines. I'm not exactly sure, but it can be
        lengthy if needed, the text will just wrap. To add more than one section
        at a time, just click the Green Plus to add another line.
      </h5>
      <Button variant="contained" size="small" className={classes.addIconColor}>
        <AddIcon />
      </Button>
      <form onSubmit={() => handleAppend()}>
        <div>
          <label>
            <div>Section Name</div>
            <input type="text" name="name" />
          </label>
        </div>
        <input type="submit" value="Cancel" />
        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

const handleAppend = event => {
  alert("A new section was added");
  event.preventDefault();
};

export default withStyles(styles)(NewSection);
