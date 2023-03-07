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
      & img {
        width: 40px;
        height: 40px;
      }
      & span {
        font-size: 14px;
        padding: 0px 0px 0px 8px;
      }
    }

    @media (max-width: 380px) {
      & span {
        display: none;
      }
    }
  }

  & div:nth-child(2) {
    padding: 0px 60px 0px 0px;

    @media (max-width: 600px) {
      width: 190px;
      height: 60px;
      padding: 0px 40px 0px 0px;

      & img {
        width: 100%;
        height: 100%;
      }
    }

    @media (max-width: 380px) {
      width: 110px;
      padding: 0px 10px 0px 0px;
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
