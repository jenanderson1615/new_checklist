import React from "react";
import ChecklistItemHeaders from './ChecklistItemHeaders';
import ChecklistInfo from '../../Components/ChecklistInfo';
import ChecklistItemInfo from './ChecklistItemInfo';

const ChecklistItemsView = () => (
  <div>
      <ChecklistInfo/>
      <ChecklistItemInfo/>
      <ChecklistItemHeaders/>
  </div>
);

export default ChecklistItemsView;
