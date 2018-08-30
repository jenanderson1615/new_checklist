import React from "react";
import ChecklistItemList from './ChecklistItemList';
import ChecklistInfo from '../../Components/ChecklistInfo';
import ChecklistItemInfo from './ChecklistItemInfo';

const ChecklistItemsView = () => (
  <div>
      <ChecklistInfo/>
      <ChecklistItemInfo/>
      <ChecklistItemList/>
  </div>
);

export default ChecklistItemsView;
