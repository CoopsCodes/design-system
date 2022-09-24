import { PrimaryButton, SecondaryButton } from "../components";
import { Section } from "../utils";

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
