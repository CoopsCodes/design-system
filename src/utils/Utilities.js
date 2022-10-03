import {
  ButtonsScreen,
  Dashboard,
  InputsScreen,
  ModalScreen,
} from "../screens";

// This object will update the routes for react router and also for the Navbar, order matters here and will display the list in the order here
export const pages = [
  {
    key: 1,
    path: "/",
    name: "Home",
    component: <Dashboard />,
  },
  {
    key: 2,
    path: "/buttons",
    name: "Buttons",
    component: <ButtonsScreen />,
  },
  {
    key: 3,
    path: "/inputs",
    name: "Inputs",
    component: <InputsScreen />,
  },
  {
    key: 4,
    path: "/modal",
    name: "Modal",
    component: <ModalScreen />,
  },
];
