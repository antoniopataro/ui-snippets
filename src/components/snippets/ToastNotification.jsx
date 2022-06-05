import React, { useState } from "react";

import styled from "styled-components";

const ToastNotificationContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: fit-content;
  height: 100px;

  align-items: center;
  justify-content: center;

  gap: 25px;
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

const Toast = styled.div`
  position: absolute;

  display: flex;
  flex-direction: row;

  z-index: 1;

  bottom: 0;
  right: 0;

  width: 300px;
  height: 75px;

  align-items: center;
  justify-content: space-between;

  margin: 30px;
  padding: 30px;

  border-radius: 10px;

  color: white;
  background: hsl(0deg 0% 2%);

  opacity: 0;

  transform: translateY(30px);
  overflow: hidden;

  transition: 0.15s ease;
  transition-property: opacity, transform;
`;

function ToastNotification() {
  const [newToast, setNewToast] = useState(null);
  const [toastContent, setToastContent] = useState("");

  const handleToast = (msg) => {
    setNewToast(true);
    setToastContent(msg);

    setTimeout(() => {
      setNewToast(false);
    }, 5000);
  };

  const toastStyles = {};

  if (newToast) {
    toastStyles.opacity = 1;
    toastStyles.transform = `translateY(0px)`;
  }

  if (!newToast) {
    toastStyles.opacity = 0;
    toastStyles.transform = `translateY(30px)`;
  }

  return (
    <>
      <ToastNotificationContainer>
        <button onClick={() => handleToast("This is a Toast.")}>
          Click Here!
        </button>
        <button onClick={() => handleToast("This is also a Toast.")}>
          And Here!
        </button>
      </ToastNotificationContainer>
      <Toast style={toastStyles}>{toastContent}</Toast>
    </>
  );
}

export default ToastNotification;
