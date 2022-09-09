import React from "react";
import NavBar from "./components/NavBar";
import AppRoutes from "./routes/Routes";
import { GlobalStyles } from "./utils";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <AppRoutes />
      <GlobalStyles />
    </React.Fragment>
  );
}

export default App;
