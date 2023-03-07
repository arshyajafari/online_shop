import styled, { css, keyframes } from "styled-components";

const containerCss = ({ isShown }) => {
  if (isShown) {
    return css`
      opacity: 1;
      pointer-events: visible;
    `;
  }
};

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  pointer-events: none;
  transition: all 0.3s ease-in-out;
  transition: 0.3s;
  opacity: 0;
  z-index: 1;
  ${containerCss}
`;

const slideScale = keyframes`
  0%{
    transform: scale(0.3);
    opacity: 0;
  }
  100%{
    transform: scale(0.7);
    opacity: 1;
  }
`;

export const ModalContainer = styled.div`
  width: 70%;
  height: 75%;
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  transform: scale(0.7);
  transition: 0.3s;
  margin: 20px auto;
  animation: ${(props) =>
    props.isShown
      ? css`
          ${slideScale} 0.5s ease
        `
      : ""};

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Head = styled.div`
  width: 90%;
  height: 18%;
  color: rgb(110, 110, 110);
  font-size: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gray;
  margin-top: 10px;
  padding-bottom: 5px;

  @media (max-width: 450px) {
    height: 12%;
    font-size: 24px;
  }
`;

export const Content = styled.div`
  width: 95%;
  font-size: 24px;
  overflow-y: auto;
  margin: 25px 0px 0px;
  padding: 0px 40px;

  & p {
    width: 100%;
    margin: 10px auto 0px;
  }

  & div:last-child p {
    width: 100%;
    margin: 10px 0px 0px;
  }

  & div {
    @media (max-width: 600px) {
      flex-direction: column;
      border: none;
      margin: 0px;
      padding: 0px;
    }
  }

  @media (max-width: 450px) {
    font-size: 18px;
    padding: 0px 20px;
  }
`;
