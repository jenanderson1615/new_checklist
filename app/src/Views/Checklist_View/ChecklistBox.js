import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import ChecklistSections from "./ChecklistSections";
import {
  GridList,
  GridListTile,
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  gridTitle: {
    width: 800,
    height: 20
  }
});

const ChecklistBox = () => {
  return <GridList cols={2}>{fields()}</GridList>;
};

const fields = () => {
  return ChecklistSections.map(i => {
    let sectionName = i.section_name;
    let completedItems = i.completedItems;
    var totalItems = i.totalItems;

    return (
      <GridListTile cols={1}>
        <ListItem>
          <Checkbox onChange={() => checkboxChanged()} />
          <ListItemText primary={sectionName} />
          <ListItemSecondaryAction />
          {completedItems}/{totalItems} Items
          <ListItemSecondaryAction />
        </ListItem>
      </GridListTile>
    );
  });
};

const checkboxChanged = () => {
    window.location.href = "checklist_items";
};

export default withStyles(styles)(ChecklistBox);
