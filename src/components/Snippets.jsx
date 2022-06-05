import HoverHighlight from "./snippets/HoverHighlight";
import ToastNotification from "./snippets/ToastNotification";
import ModalSnippet from "./snippets/ModalSnippet";
import LoadingDonut from "./snippets/LoadingDonut";

import styled from "styled-components";

const SnippetsContainer = styled.section`
  display: grid;

  width: 50vw;

  align-items: center;
  justify-content: left;

  gap: 20px;
  padding: 4px;

  overflow: hidden;

  .snipet-wrapper {
    display: grid;
    place-items: center;

    width: 100%;
    height: 200px;

    border-radius: 10px;
  }
`;

function Snippets() {
  return (
    <SnippetsContainer>
      <HoverHighlight />
      <ToastNotification />
      <ModalSnippet />
      <LoadingDonut />
    </SnippetsContainer>
  );
}

export default Snippets;
