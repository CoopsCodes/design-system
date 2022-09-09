import styled from "styled-components";
import { primary } from "../utils/Colours";

const AltWhite = "white";

const Button = styled.button`
  font-size: 1rem;
  border-style: none;
  color: black;
  padding: 0;
  background-color: ${primary.blue};
  min-width: 220px;
  cursor: pointer;
  user-select: none;
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
`;

const Span = styled.span`
  border: solid;
  border-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(2px);
  min-width: 220px;
  height: 50px;
  margin-top: -1px;
  padding: 0;
  transform: translate(0px, 0px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  &:focus-visible {
    outline: revert;
  }
  &:hover,
  &:focus-visible {
    transform: translate(6px, -6px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }
  &:active {
    transform: translate(0px, 0px);
    transition: transform 50ms;
  }
`;

const SecondaryButtonStyles = styled(Button)`
  background-color: ${AltWhite};
`;

export function SecondaryButton({ children, ...props }) {
  return (
    <SecondaryButtonStyles {...props}>
      <Span {...props}>{children}</Span>
    </SecondaryButtonStyles>
  );
}

export default function PrimaryButton({ children, ...props }) {
  return (
    <Button {...props}>
      <Span {...props}>{children}</Span>
    </Button>
  );
}
