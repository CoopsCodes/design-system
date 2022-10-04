import { addDecorator, addParameters } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { contexts } from "./contexts";

addParameters({
  backgrounds: {
    values: [
      { name: "Default theme", value: "#ffffff", default: true },
      { name: "Dark theme", value: "#050449" },
    ],
  },
});

addDecorator(withContexts(contexts));

// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// };
// export const parameters = {
//   backgrounds: {
//     default: "twitter",
//     values: [
//       {
//         name: "twitter",
//         value: "#00aced",
//       },
//       {
//         name: "facebook",
//         value: "#3b5998",
//       },
//     ],
//   },
// };
