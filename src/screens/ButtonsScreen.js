import React from "react";
import { PrimaryButton, SecondaryButton } from "../components";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

export function ButtonsScreen() {
  return (
    <Section>
      <h1>Buttons</h1>
      <PrimaryButton>Primary Button</PrimaryButton>

      <SecondaryButton>Secondary Button</SecondaryButton>

      <PrimaryButton disabled>Disabled Button</PrimaryButton>

      <PrimaryButton modifiers={["small"]}>Smaller Font Button</PrimaryButton>

      <PrimaryButton modifiers={["large"]}>Larger Font Button</PrimaryButton>
    </Section>
  );
}
