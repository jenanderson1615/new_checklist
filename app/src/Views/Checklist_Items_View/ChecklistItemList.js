import React from "react";
import {
  Divider,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Button,
  List,
  ListItem
} from "@material-ui/core";
import ChecklistItemHistoryView from './ChecklistItemHistoryView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const ChecklistItemList = () => (
  <div>
    <h4>General - General Ledger</h4>
    <Divider />
    <List>
      <ListItem>
        <Button>Pass</Button>
        <Button>Fail</Button>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>All Dates Popup Menu</ExpansionPanelSummary>
          <ExpansionPanelDetails><ChecklistItemHistoryView/></ExpansionPanelDetails>
        </ExpansionPanel>
      </ListItem>
    </List>
  </div>
);
export default ChecklistItemList;
