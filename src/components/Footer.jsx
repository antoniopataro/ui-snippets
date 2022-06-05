import React, { useState } from "react";

import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;

  height: 300px;

  align-items: center;
  justify-content: center;

  #footer-background-text {
    position: absolute;

    max-width: 50vw;

    z-index: 0;

    background-image: linear-gradient(
        60deg,
        rgba(43, 43, 43, 0.3),
        rgba(217, 217, 217, 1)
      ),
      linear-gradient(180deg, rgba(97, 97, 97, 0.05), rgba(97, 97, 97, 0.05));

    text-align: center;

    font-size: 112px;
    font-weight: 700;

    line-height: 100px;

    cursor: default;
    pointer-events: none;

    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  #get-in-touch {
    display: flex;
    flex-direction: row;

    z-index: 1;

    width: 360px;
    height: 60px;

    align-items: center;
    justify-content: space-between;

    padding: 0 30px;

    border-radius: 10px;

    box-shadow: 0px 0px 4px black;

    cursor: pointer;

    color: #ffffffe6;
    background: hsl(0deg 0% 2%);

    transition: 0.15s ease;
    transition-property: box-shadow, transform;

    :hover {
      transform: scale(1.05);
      box-shadow: 0px 0px 8px black;
    }

    :hover #footer-press {
      color: #ffffffe6;
    }
  }

  #lets-connect-right {
    display: flex;
    flex-direction: row;

    align-items: center;

    gap: 10px;

    #footer-press {
      color: hsl(0 0% 43.5%);

      transition: 0.15s ease;
      transition-property: color;
    }

    #footer-key {
      display: grid;
      place-items: center;

      width: 30px;
      height: 30px;

      border: 1px solid hsl(0 0% 43.5%);
      border-radius: 4px;

      color: #ffffffe6;
      background-color: #1c1c1c;
    }
  }
`;

const ModalSnippetContainer = styled.div`
  display: grid;
  place-items: center;

  z-index: 10;

  height: fit-content;

  padding: 25px 0;

  border-radius: 10px;

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
  flex-direction: column;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  width: 600px;
  height: 400px;

  align-items: center;
  justify-content: center;

  padding: 10px;
  border-radius: 10px;

  background: hsl(0deg 0% 14%);

  transform: scale(1);

  transition: 0.15s ease;
  transition-property: opacity, transform;

  #close-modal-button {
    position: absolute;

    top: 10px;
    right: 10px;
  }

  #modal-text {
    display: flex;
    flex-direction: column;

    gap: 20px;

    text-align: center;

    color: #ffffffe6;
    a {
      color: inherit;
    }
  }

  #modal-email {
    display: flex;
    flex-direction: row;

    width: fit-content;
    height: 32px;

    align-items: center;
    justify-content: space-between;

    gap: 20px;
    padding-left: 12px;
    margin-top: 20px;

    border-radius: 4px;

    font-size: 14px;

    background-color: #1c1c1c;

    transition: color 0.15s linear;

    button {
      background-color: transparent;
    }
  }
`;

function Footer() {
  const [showModal, setShowModal] = useState();
  const [emailColor, setEmailColor] = useState("hsl(0deg 0% 44%)");

  const modalContainerStyles = {};
  const modalStyles = {};

  if (showModal) {
    modalContainerStyles.pointerEvents = "auto";
    modalContainerStyles.opacity = 1;

    modalStyles.opacity = 1;
    modalStyles.transform = `scale(1.1)`;
  }

  window.addEventListener("keypress", (e) => {
    if (e.key === "A" || e.key === "a") {
      setShowModal(true);
    }
  });

  function handleCopyEmail() {
    navigator.clipboard.writeText("antonio.pataro12@gmail.com");

    setEmailColor("green");
  }

  return (
    <FooterContainer>
      <div id="footer-background-text">Let's Connect!</div>
      <div
        id="get-in-touch"
        onClick={() => {
          setShowModal(true);
        }}
      >
        <div>Get in Touch</div>
        <div id="lets-connect-right">
          <div id="footer-press">Press</div>
          <div id="footer-key">A</div>
        </div>
      </div>

      <ModalSnippetContainer>
        <ModalContainer style={modalContainerStyles}>
          <Modal style={modalStyles}>
            <button onClick={() => setShowModal(false)} id="close-modal-button">
              Close
            </button>
            <div id="modal-text">
              <div>
                I am very active on <a href=""> Github</a> and{" "}
                <a href="">Linkedin</a>.
              </div>
              <div>
                My <a href="">Twitter</a> is mainly for funny stuff I see out
                there.
              </div>
              <div>Want to talk directly to me? Send me an e-mail:</div>
            </div>
            <div id="modal-email" style={{ color: emailColor }}>
              <div>antonio.pataro12@gmail.com</div>
              <button onClick={() => handleCopyEmail()}>Copy</button>
            </div>
          </Modal>
        </ModalContainer>
      </ModalSnippetContainer>
    </FooterContainer>
  );
}

export default Footer;
