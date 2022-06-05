import React, { useState } from "react";

import styled from "styled-components";

const ModalSnippetContainer = styled.div`
  display: grid;
  place-items: center;

  z-index: 10;

  width: fit-content;
  height: 100px;

  padding: 25px 25px;

  border-radius: 10px;

  background: #1c1c1c;

  button {
    display: grid;
    place-items: center;

    height: 32px;

    padding: 0 12px;

    border: none;
    border-radius: 4px;
    outline: none;

    cursor: pointer;

    font-family: "Inter";
    font-size: 14px;

    color: hsl(0 0% 43.5%);
    background: hsl(0deg 0% 14%);

    transition: 0.15s ease;
    transition-property: color;

    :hover {
      color: hsl(0 0% 87%);
    }
  }
`;

const ModalContainer = styled.div`
  position: absolute;

  pointer-events: none;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  width: 100vw;
  height: 100vh;

  opacity: 0;

  background: rgba(0, 0, 0, 0.5);

  transition: 0.15s ease;
  transition-property: opacity;
`;

const Modal = styled.div`
  position: absolute;

  display: flex;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  width: 600px;
  height: 400px;

  align-items: center;
  justify-content: center;

  transform: scale(1);

  border-radius: 10px;

  background: hsl(0deg 0% 14%);

  transition: 0.15s ease;
  transition-property: opacity, transform;
`;

function ModalSnippet() {
  const [showModal, setShowModal] = useState(false);

  const modalContainerStyles = {};
  const modalStyles = {};

  if (showModal) {
    modalContainerStyles.pointerEvents = "auto";
    modalContainerStyles.opacity = 1;

    modalStyles.opacity = 1;
    modalStyles.transform = `scale(1.1)`;
  }

  return (
    <ModalSnippetContainer>
      <button onClick={() => setShowModal(true)}>I am a Modal.</button>
      <ModalContainer style={modalContainerStyles}>
        <Modal style={modalStyles}>
          <button onClick={() => setShowModal(false)}>Close</button>
        </Modal>
      </ModalContainer>
    </ModalSnippetContainer>
  );
}

export default ModalSnippet;
