import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 50px 0;

  a {
    text-decoration: none;
    color: white;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <p>
        Built by{" "}
        <a target="_blank" href="https://www.antoniopataro.dev">
          Antônio
        </a>
        .
      </p>
      <p>
        Inspired by{" "}
        <a target="_blank" href="https://twitter.com/emilkowalski_">
          Emil
        </a>
        .
      </p>
    </FooterContainer>
  );
}

export default Footer;
