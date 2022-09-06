import React from "react";
import PrimaryButton from "../components/Button";
import NavBar from "../components/NavBar";

export default function ButtonsScreen() {
  return (
    <React.Fragment>
      <NavBar />
      <h1>Buttons</h1>
      <PrimaryButton>Primary Button</PrimaryButton>
    </React.Fragment>
  );
}
