import { Route, Routes } from "react-router-dom";
import { pages } from "../utils";

export default function AppRoutes() {
  return (
    <Routes>
      {pages.map((page) => {
        return (
          <Route key={page.key} path={page.path} element={page.component} />
        );
      })}
    </Routes>
  );
}
