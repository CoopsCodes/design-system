import { Routes, Route } from "react-router-dom";
import { ButtonsScreen, Dashboard, InputsScreen } from "../screens";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="buttons" element={<ButtonsScreen />} />
      <Route path="inputs" element={<InputsScreen />} />
    </Routes>
  );
}
