import styled from "styled-components";

const HeaderContainer = styled.section`
  display: flex;
  flex-direction: row;

  width: 50vw;
  height: 200px;

  align-items: center;
`;

function Header() {
  return (
    <HeaderContainer>
      <div>UI-Snippets</div>
    </HeaderContainer>
  );
}

export default Header;
