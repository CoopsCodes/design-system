import styled from "styled-components";
import { typeScale, fonts } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  small: () => `
	font-size: ${typeScale.helper};
  `,
  large: () => `
  	font-size: ${typeScale.h6};
  `,
  warning: ({ theme }) => `
    	background-color: ${theme.status.warningColour};
    `,
  error: ({ theme }) => `
    	background-color: ${theme.status.errorColour};
    `,
  success: ({ theme }) => `
    	background-color: ${theme.status.successColour};
    `,
  inverted: ({ theme }) => `
  		background-color: ${theme.textColour};
		color: ${theme.textColourInverted};
	`,
};

const Button = styled.button`
  font-size: ${typeScale.p};
  font-family: ${fonts.main};
  border-style: none;
  color: black;
  padding: 0;
  background-color: ${(props) => props.theme.primaryColour};
  width: 220px;
  cursor: pointer;
  user-select: none;
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  &:focus-visible {
    outline: 2px inset ${(props) => props.theme.primaryColour};
    outline-offset: 2px;
  }

  &:disabled {
    background: grey;
    cursor: not-allowed;
    transition: transform 0ms cubic-bezier(0, 0, 0, 0);
    transform: translate(0);
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

const Span = styled.span`
  border: 3px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(2px);
  min-width: 220px;
  height: 50px;
  padding: 0;
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

  &:disabled {
    transition: transform 0ms cubic-bezier(0, 0, 0, 0);
    transform: translate(0);
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

const SecondaryButtonStyles = styled(Button)`
  background-color: ${(props) => props.theme.secondaryButtonMain}
    ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export function SecondaryButton({ children, ...props }) {
  return (
    <SecondaryButtonStyles {...props}>
      <Span {...props}>{children}</Span>
    </SecondaryButtonStyles>
  );
}

export function PrimaryButton({ children, ...props }) {
  return (
    <Button {...props}>
      <Span {...props}>{children}</Span>
    </Button>
  );
}
