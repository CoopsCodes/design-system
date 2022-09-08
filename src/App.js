import React from "react";
import NavBar from "./components/NavBar";
import AppRoutes from "./routes/Routes";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <AppRoutes />
    </React.Fragment>
  );
}

export default App;
