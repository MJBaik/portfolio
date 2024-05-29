import styled from "styled-components";

export const ModalDescWrapper = styled.div`
  width: 45vw;
  height: 100%;
  overflow-y: auto;
  padding-right: 20px;

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(var(--bg-modal), 0.5);
    border-radius: 25px;
  }

  .titleBar {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;

    & > h1 {
      font-size: 24pt;
    }

    .icons {
      height: 30px;
      width: 300px;
      margin-left: 10px;

      img {
        width: 30px;
        margin: 0 5px;
      }
    }
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
    overflow-y: auto;
  }
`;
