import Header from "./components/Header/index.jsx";
import Snippets from "./components/Snippets/index.jsx";
import Footer from "./components/Footer/index.jsx";

import styled from "styled-components";

const AppContainer = styled.main`
  display: flex;
  flex-direction: column;

  width: 100vw;
  min-height: 100vh;

  align-items: center;

  color: #d9d9d9;
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
