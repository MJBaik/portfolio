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

  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 24pt;
  font-weight: 300;
  color: rgb(var(--sub));
  transition: all 0.5s ease;
  cursor: pointer;

  .arrow {
    font-size: 36pt;
    margin-left: 10px;
    color: rgb(var(--red));
  }

  &:hover {
    background-color: rgba(var(--border), 0.2);
  }

  @media screen and (max-width: 992px) {
    height: 80px;
  }

  @media screen and (max-width: 576px) {
    height: 50px;
  }
`;
