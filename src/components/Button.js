import styled from "styled-components";

const Button = styled.button`
  font-size: 1rem;
  border-style: none;
  padding: 0;
  background-color: #00a3ff;
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
  width: 220px;
  height: 50px;
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

export default function PrimaryButton({ children, ...props }) {
  return (
    <Button {...props}>
      <Span {...props}>{children}</Span>
    </Button>
  );
}
