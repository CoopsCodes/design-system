import { useState } from "react";
import { AppThemeContext } from "./context/useTheme";
import { ThemeProvider } from "styled-components";
import AppRoutes from "./routes/Routes";
import { AppLayout } from "./utils/AppLayout";
import { GlobalStyles, lightTheme, darkTheme } from "./utils";

function App() {
  const [useDarkTheme, setUseDarkTheme] = useState(false);

  const themeToggle = () => {
    setUseDarkTheme(!useDarkTheme);
  };

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : lightTheme}>
      <AppThemeContext.Provider
        value={{
          useDarkTheme,
          themeToggle,
        }}
      >
        <AppLayout>
          <AppRoutes />
          <GlobalStyles />
        </AppLayout>
      </AppThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
