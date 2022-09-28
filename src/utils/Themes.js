import { text, blue, warning, error, success } from "../utils";

export const lightTheme = {
  background: text.inverted,
  secondaryButtonMain: text.natural,
  primaryColour: blue[300],
  primaryCoverHover: blue[200],
  primaryCoverActive: blue[100],
  textColour: text.natural,
  textColourInverted: text.inverted,
  border: text.natural,
  borderInverted: text.inverted,
  status: {
    warningColour: warning[100],
    warningColourHover: warning[200],
    warningColourActive: warning[300],
    errorColour: error[100],
    errorColourHover: error[200],
    errorColourActive: error[300],
    successColour: success[100],
    successColourHover: success[200],
    successColourActive: success[300],
  },
};

// create your dark theme colours here to match the light variables to your light theme
export const darkTheme = {
  background: text.natural,
  secondaryButtonMain: text.natural,
  primaryColour: blue[300],
  primaryCoverHover: blue[200],
  primaryCoverActive: blue[100],
  textColour: text.inverted,
  textColourInverted: text.natural,
  border: text.inverted,
  borderInverted: text.natural,
  status: {
    warningColour: warning[100],
    warningColourHover: warning[200],
    warningColourActive: warning[300],
    errorColour: error[100],
    errorColourHover: error[200],
    errorColourActive: error[300],
    successColour: success[100],
    successColourHover: success[200],
    successColourActive: success[300],
  },
};
