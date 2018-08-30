import Select_View from "./Views/Select_View/SelectView";
import Checklist_View from "./Views/Checklist_View/ChecklistView";
import Checklist_Items_View from "./Views/Checklist_Items_View/Checklist_Items_View";

const Routes = [
  {
    path: "/",
    exact: true,
    component: Select_View
  },
  {
    path: "/checklist",
    exact: true,
    component: Checklist_View
  },
  {
    path: "/checklist_items",
    exact: true,
    component: Checklist_Items_View
  },
];

export default Routes;
