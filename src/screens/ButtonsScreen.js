import React from "react";
import PrimaryButton, { SecondaryButton } from "../components/Button";

export default function ButtonsScreen() {
  return (
    <React.Fragment>
      <h1>Buttons</h1>
      <PrimaryButton>Primary Button</PrimaryButton>

      <SecondaryButton>Secondary Button</SecondaryButton>
    </React.Fragment>
  );
}
