import SelectView from "./Views/Select_View/SelectView";
import ChecklistView from "./Views/Checklist_View/ChecklistView";
import ChecklistItemsView from "./Views/Checklist_Items_View/ChecklistItemsView";
import NewSection from "./Views/Edit_Checklists/NewSection";

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
  {
    path: "/edit_checklist",
    exact: true,
    component: NewSection
  },
];

export default Routes;
