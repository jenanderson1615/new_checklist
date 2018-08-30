import SelectView from "./Views/Select_View/SelectView";
import ChecklistView from "./Views/Checklist_View/ChecklistView";
import ChecklistItemsView from "./Views/Checklist_Items_View/ChecklistItemsView";

const Routes = [
  {
    path: "/",
    exact: true,
    component: SelectView
  },
  {
    path: "/checklist",
    exact: true,
    component: ChecklistView
  },
  {
    path: "/checklist_items",
    exact: true,
    component: ChecklistItemsView
  },
];

export default Routes;
