import HighlightOnHover from "./HighlightOnHover";
import ToastNotification from "./ToastNotfication";
import ModalSnippet from "./ModalSnippet";
import LoadingDonut from "./LoadingDonut";

import styled from "styled-components";

const SnippetsContainer = styled.main`
  display: flex;
  flex-direction: column;

  width: 60vw;

  justify-content: flex-start;

  gap: 40px;
  padding: 50px 0;

  .snippet-cathegory {
    display: flex;
    flex-direction: column;

    gap: 10px;
  }
`;

function Snippets() {
  return (
    <SnippetsContainer>
      <div className="snippet-cathegory">
        <h1>Hover</h1>
        <HighlightOnHover />
      </div>
      <div className="snippet-cathegory">
        <h1>Buttons</h1>
        <ToastNotification />
        <ModalSnippet />
      </div>
      <div className="snippet-cathegory">
        <h1>Animations</h1>
        <LoadingDonut />
      </div>
    </SnippetsContainer>
  );
}

export default Snippets;
