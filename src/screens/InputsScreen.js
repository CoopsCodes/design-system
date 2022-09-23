import React from "react";
import { Input } from "../components";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

export function InputsScreen() {
  return (
    <Section>
      <h1>Inputs</h1>
      <Input />
    </Section>
  );
}
