import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ChecklistItemHistoryData from './ChecklistItemHistoryData';

const ChecklistItemHistoryView = () =>  {
  return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Version</TableCell>
            <TableCell>Checklist Item Status</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Ticket ID</TableCell>
            <TableCell>Ticket Status</TableCell>
            <TableCell>Short Description</TableCell>
            <TableCell>Assigned</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ChecklistItemHistoryData.map(itemHistory => {
            return (
              <TableRow>
                <TableCell >{itemHistory.date}</TableCell>
                <TableCell>{itemHistory.version}</TableCell>
                <TableCell>{itemHistory.checklist_item_status}</TableCell>
                <TableCell>{itemHistory.author}</TableCell>
                <TableCell>{itemHistory.ticket_id}</TableCell>
                <TableCell>{itemHistory.ticket_status}</TableCell>
                <TableCell>{itemHistory.short_description}</TableCell>
                <TableCell>{itemHistory.assigned}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
  );
}

export default ChecklistItemHistoryView;