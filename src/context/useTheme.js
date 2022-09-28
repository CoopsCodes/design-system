import { createContext, useContext } from "react";

export const AppThemeContext = createContext();

export function useTheme() {
  return useContext(AppThemeContext);
}
