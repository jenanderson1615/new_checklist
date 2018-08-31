import React from "react";
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Button, 
  ListItem
} from "@material-ui/core";
import ChecklistItemHistoryView from "./ChecklistItemHistoryView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const ChecklistItemSubitems = () => (
  <div>
    <ListItem>
      <Button>Pass</Button>
      <Button>Fail</Button>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          Save Patient
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ChecklistItemHistoryView />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </ListItem>
    <ListItem>
      <Button>Pass</Button>
      <Button>Fail</Button>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          Do search on patient name
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ChecklistItemHistoryView />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </ListItem>
  </div>
);
export default ChecklistItemSubitems;
