import React from "react";
import { PrimaryButton, SecondaryButton } from "../components";

export function ButtonsScreen() {
  return (
    <React.Fragment>
      <h1>Buttons</h1>
      <PrimaryButton>Primary Button</PrimaryButton>

      <SecondaryButton>Secondary Button</SecondaryButton>

      <PrimaryButton disabled>Disabled Button</PrimaryButton>
    </React.Fragment>
  );
}
