import { PrimaryButton, SecondaryButton } from "../components";
import { Section } from "../utils";

export function ButtonsScreen() {
  return (
    <Section>
      <h1>Buttons</h1>
      <PrimaryButton>Primary Button</PrimaryButton>

      <SecondaryButton>Secondary Button</SecondaryButton>
      <SecondaryButton modifiers={["inverted"]}>
        Secondary Ghost Button
      </SecondaryButton>

      <PrimaryButton disabled>Disabled Button</PrimaryButton>

      <PrimaryButton modifiers={["small"]}>Smaller Font Button</PrimaryButton>

      <PrimaryButton modifiers={["large"]}>Larger Font Button</PrimaryButton>

      <PrimaryButton modifiers={["warning"]}>Warning</PrimaryButton>
      <PrimaryButton modifiers={["error"]}>Error</PrimaryButton>
      <PrimaryButton modifiers={["success"]}>Success</PrimaryButton>
    </Section>
  );
}
