import styled from "styled-components";
import { Illustrations, CloseIcon } from "../assets";
import { typeScale } from "../utils";
import { PrimaryButton } from "./Button";

const ModalWrapper = styled.section`
  padding: 40px 0;
  width: 700px;
  max-width: fit-content;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
    // width: 70%;
    height: 300px;
  }
`;

const ModalHeader = styled.h3`
  font-size: ${typeScale.h3};
  text-align: center;
  max-width: 70%;
`;

const ModalText = styled.p`
  font-size: ${typeScale.p};
  text-align: center;
  max-width: 80%;
`;

const CloseModalButton = styled.button`
  position: absolute;
  cursor: pointer;
  border: none;
  background: none;
  top: 40px;
  right: 40px;
  width: 60px;
  height: 60px;
  padding: 0;
`;

export const Modal = () => {
  return (
    <ModalWrapper>
      <CloseModalButton aria-label="close modal">
        <CloseIcon />
      </CloseModalButton>
      {/** "this is hidden because the graphic provides no information that isnt described on the page" */}
      <img
        src={Illustrations.Signup}
        alt="Sign up graphic"
        aria-hidden="true"
      />
      <ModalHeader>Register for Tech Diversity Lab</ModalHeader>
      <ModalText>and unlock your true potential</ModalText>
      <PrimaryButton>Register</PrimaryButton>
    </ModalWrapper>
  );
};
