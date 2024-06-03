import styled from "styled-components";

export const ModalDescWrapper = styled.div`
  width: 50%;
  height: 100%;
  overflow-y: auto;
  padding-right: 20px;

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 0px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  .set {
    width: 100%;

    .subtitle {
      font-weight: 600;
    }

    & > p {
      &,
      * {
        color: rgb(var(--text-sub));
        line-height: 1.5;
      }
      margin: 10px 0;
    }

    .desc {
      width: 100%;

      & > span {
        color: rgb(var(--red));
      }
    }

    margin: 20px 0;
  }

  @media screen and (max-width: 992px) {
    width: 100%;
    height: max-content;
    overflow-y: visible;
  }
`;
