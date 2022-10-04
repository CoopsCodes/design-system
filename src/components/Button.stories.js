import React from "react";
import { PrimaryButton } from "./Button";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Buttons",
  component: PrimaryButton,
};

export const Primary = () => <PrimaryButton>Register</PrimaryButton>;
