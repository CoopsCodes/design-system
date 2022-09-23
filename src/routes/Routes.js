import { Route, Routes } from "react-router-dom";
import { ButtonsScreen, Dashboard, InputsScreen } from "../screens";

const pages = [
  {
    path: "/",
    component: <Dashboard />,
  },
  {
    path: "/buttons",
    component: <ButtonsScreen />,
  },
  {
    path: "/inputs",
    component: <InputsScreen />,
  },
];

export default function AppRoutes() {
  return (
    <Routes>
      {pages.map((page, index) => {
        return <Route key={index} path={page.path} element={page.component} />;
      })}
    </Routes>
  );
}
