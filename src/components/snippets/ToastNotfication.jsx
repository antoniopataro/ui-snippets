import React, { useState } from "react";

import styled from "styled-components";

const ToastNotificationContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: fit-content;
  height: 100px;

  align-items: center;
  justify-content: center;

  gap: 20px;
  padding: 16px 24px;

  border-radius: 4px;

  background: #1c1c1c;

  button {
    padding: 8px 12px;

    border: none;
    outline: none;

    border-radius: 4px;

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
  position: fixed;

  display: flex;
  flex-direction: row;

  z-index: 1;

  bottom: 20px;
  right: 20px;

  width: 300px;
  height: 75px;

  align-items: center;
  justify-content: space-between;

  padding: 30px;

  border-radius: 4px;

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
    }, 2500);
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
        <button onClick={() => handleToast("Indeed.")}>
          This opens a Toast.
        </button>
      </ToastNotificationContainer>
      <Toast style={toastStyles}>{toastContent}</Toast>
    </>
  );
}

export default ToastNotification;
