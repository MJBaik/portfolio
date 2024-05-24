import styled from "styled-components";

export const HeaderPaddingSection = styled.section`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;

  .inner {
    text-align: justify;
    width: 50%;
    z-index: 1;

    & > span {
      font-size: 32pt;
      color: rgba(var(--text-sub), 0.3);
      font-weight: 900;

      &.color {
        color: rgba(var(--text-sub), 0.5);
      }
    }

    @media screen and (max-width: 992px) {
      width: 80%;

      & > span {
        font-size: 30pt;
      }
    }

    @media screen and (max-width: 576px) {
      width: 90%;

      & > span {
        font-size: 28pt;
      }
    }
  }

  .bgLine {
    position: absolute;
    top: 50vh;

    path {
      fill-rule: evenodd;
    }
  }
`;
