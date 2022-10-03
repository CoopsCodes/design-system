import { Modal } from "../components";
import styled from "styled-components";

const ModalWrapper = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModalScreen = () => {
  return (
    <ModalWrapper>
      <Modal />
    </ModalWrapper>
  );
};
