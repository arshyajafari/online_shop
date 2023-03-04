import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;

  & div h5 {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  & div p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
