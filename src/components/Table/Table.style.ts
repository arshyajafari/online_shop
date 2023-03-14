import styled from "styled-components";

export const Container = styled.div`
  width: 98%;
  margin: 30px auto 0px;

  @media (max-width: 710px) {
    margin: 30px auto;

    thead {
      display: none;
    }

    tfoot {
      tr {
        display: flex;
        justify-content: space-around;
        align-items: center;
      }

      tr td:first-child {
        text-align: left;
      }

      tr td:last-child {
        display: none;
      }
    }
  }
`;

export const StyledTRTable = styled.tr`
  @media (max-width: 710px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    td {
      width: 100%;
    }

    td:first-child {
      display: none;
    }

    td:nth-child(5),
    td:nth-child(6) {
      display: none;
    }

    img {
      width: 40%;
      margin: 0px auto;
    }
  }
`;

export const StyledPriceTR = styled.tr`
  width: 100%;
  display: none;

  @media (max-width: 710px) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    td:first-child {
      display: block;
    }
  }
`;
