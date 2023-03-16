import styled from "styled-components";

export const Container = styled.div`
  width: 98%;
  border-radius: 8px;
  margin: 30px auto 0px;
  overflow-x: hidden;

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
  border-bottom: 1px solid #acacac;

  & img {
    width: 90px;
    height: 90px;
    object-fit: contain;
  }

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
      width: 260px;
      height: 260px;
      object-fit: contain;
      margin: 0px auto;
    }
  }
`;

export const StyledPriceTD = styled.td`
  width: 100%;
  display: none;

  @media (max-width: 710px) {
    display: block;

    tr {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    td:first-child {
      display: block;
    }
  }
`;
