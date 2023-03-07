import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 2000;

  & * {
    display: flex;
    justify-content: center;
    z-index: 1;
  }
`;
