import favicon from "../../favicon.png";

import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;

  width: 60vw;

  align-items: center;

  gap: 20px;
  padding-top: 50px;

  img {
    width: 50px;
    height: 50px;

    padding: 10px;

    border-radius: 4px;

    pointer-events: none;

    background-color: #1c1c1c;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <img src={favicon} alt="UI-Snippets" width={20} />
      <div>
        <h1>UI-Snippets</h1>
        <p>Some interesting creations/copies related to web design.</p>
      </div>
    </HeaderContainer>
  );
}

export default Header;
