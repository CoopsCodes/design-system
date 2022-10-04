import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../src/utils";

export const contexts = [
  {
    icon: "box",
    title: "Themes",
    components: [ThemeProvider],
    params: [
      { name: "Dark Theme", props: { theme: darkTheme } },
      { name: "Light Theme", props: { theme: lightTheme }, default: true },
    ],
    options: {
      deep: true,
      disable: false,
      cancelable: false,
    },
  },
];
// export const contexts = [
//   { name: "Default theme", props: { theme: lightTheme, default: true } },
//   { name: "Dark theme", props: { theme: darkTheme } },
// ];
