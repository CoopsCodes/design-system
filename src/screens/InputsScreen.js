import React from "react";
import Input from "../components/Input";
import NavBar from "../components/NavBar";

export default function InputsScreen() {
  return (
    <React.Fragment>
      <NavBar />
      <h1>Inputs</h1>
      <Input />
    </React.Fragment>
  );
}
