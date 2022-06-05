import React from "react";

import Header from "./components/Header";
import Snippets from "./components/Snippets";
import Footer from "./components/Footer";

import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  min-height: 100vh;

  align-items: center;

  color: #fff;
  background-color: #161616;
`;

import "./App.css";

function App() {
  return (
    <AppContainer>
      <Header />
      <Snippets />
      <Footer />
    </AppContainer>
  );
}

export default App;
