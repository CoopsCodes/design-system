import React from "react";
import AppRoutes from "./routes/Routes";
import { AppLayout } from "./utils/AppLayout";
import { GlobalStyles } from "./utils";

function App() {
  return (
    <AppLayout>
      <AppRoutes />
      <GlobalStyles />
    </AppLayout>
  );
}

export default App;
