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
import ChecklistItemSubitems from "./ChecklistItemSubitems";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CreateTicketForm from "../Ticket_Forms/CreateTicketForm";
import AppendTicketForm from "../Ticket_Forms/AppendTicketForm";

const ChecklistItemHeaders = () => (
  <div>
    <h4>General - General Ledger</h4>
    <Divider />
    <List>
      <ListItem>
        <Button>Pass</Button>
        <Button>Fail</Button>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            Default Account
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <ChecklistItemSubitems />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </ListItem>
      <ListItem>
        <Button>Pass</Button>
        <Button>Fail</Button>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            Create New Account (Patient is Primary)
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <ChecklistItemSubitems />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </ListItem>
      <ListItem>
        <Button>Pass</Button>
        <Button>Fail</Button>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            Create New Account (Patient isn't Primary)
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <ChecklistItemSubitems />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </ListItem>
      <ListItem>
        <Button>Pass</Button>
        <Button>Fail</Button>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            Create new Patient
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <AppendTicketForm />
          </ExpansionPanelDetails>
          <ExpansionPanelDetails>
            <CreateTicketForm/>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </ListItem>
      <ListItem>
        <Button>Pass</Button>
        <Button>Fail</Button>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            Update a Patient
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <ChecklistItemSubitems />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </ListItem>
    </List>
  </div>
);

export default ChecklistItemHeaders;
