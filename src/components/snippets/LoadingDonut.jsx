import styled from "styled-components";

const LoadingDonutContainer = styled.div`
  display: grid;
  place-items: center;

  width: fit-content;
  min-width: 100px;
  height: 100px;

  padding: 16px 24px;

  border-radius: 4px;

  background: #1c1c1c;

  #loading {
    width: 30px;
    height: 30px;

    border: 4px solid hsl(0deg 0% 14%);
    border-left: 4px solid hsl(0 0% 87%);

    border-radius: 50%;

    animation: loading-donut 1.2s linear infinite;

    @keyframes loading-donut {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

function LoadingDonut() {
  return (
    <LoadingDonutContainer>
      <div id="loading"></div>
    </LoadingDonutContainer>
  );
}

export default LoadingDonut;
