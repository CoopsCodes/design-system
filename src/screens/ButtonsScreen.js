import React from "react";
import { PrimaryButton, SecondaryButton } from "../components";

export function ButtonsScreen() {
  return (
    <React.Fragment>
      <h1>Buttons</h1>
      <PrimaryButton>Primary Button</PrimaryButton>

      <SecondaryButton>Secondary Button</SecondaryButton>

      <PrimaryButton disabled>Disabled Button</PrimaryButton>

      <PrimaryButton modifiers={"small"}>Smaller Font Button</PrimaryButton>

      <PrimaryButton modifiers={"large"}>Larger Font Button</PrimaryButton>
    </React.Fragment>
  );
}
