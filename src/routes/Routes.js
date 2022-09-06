import { Routes, Route } from "react-router-dom";
import ButtonsScreen from "../screens/ButtonsScreen";
import Dashboard from "../screens/Dashboard";
import InputsScreen from "../screens/InputsScreen";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="buttons" element={<ButtonsScreen />} />
      <Route path="inputs" element={<InputsScreen />} />
    </Routes>
  );
}
