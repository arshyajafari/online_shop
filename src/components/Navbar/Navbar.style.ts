import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: rgb(240, 240, 240);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0px 30px;
  padding: 18px 40px;

  @media (max-width: 600px) {
    padding: 10px 15px;
  }

  & div:first-child {
    @media (max-width: 600px) {
      display: none;
    }
  }
  & div:nth-child(2) {
    @media (max-width: 600px) {
      width: 130px;
      height: 60px;

      & img {
        width: 100%;
        height: 100%;
      }
    }
  }
  & div:last-child button {
    @media (max-width: 600px) {
      width: 28px;
      height: 28px;

      & svg {
        width: 100%;
        height: 100%;
      }

      & span {
        top: -12px;
        left: 15px;
      }
    }
  }
`;
