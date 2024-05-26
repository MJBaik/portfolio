import styled from "styled-components";

export const ItemWrapper = styled.div`
  width: 100%;
  height: 100px;
  margin: 10px 0;

  border-right: 2px solid rgb(var(--border));
  background-color: rgba(var(--border), 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 2px solid rgb(var(--border));
  border-radius: 10px;

  @media screen and (max-width: 992px) {
    height: 80px;
  }

  @media screen and (max-width: 576px) {
    height: 50px;
  }
`;
