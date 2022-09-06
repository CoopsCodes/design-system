import { Routes, Route } from "react-router-dom";
import Dashboard from "../screens/Dashboard";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}

// <Route path="about" element={<About />} />
