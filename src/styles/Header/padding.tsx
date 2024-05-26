import styled from "styled-components";
import BGLine from "../../assets/images/bgline.png";

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
      font-size: 28pt;
      color: rgba(var(--text-sub), 0.3);
      font-weight: 900;

      &.color {
        color: rgba(var(--text-sub), 0.5);
      }
    }
  }

  @media screen and (max-width: 992px) {
    height: 100vh;
    align-items: center;

    .inner {
      width: 80%;

      & > span {
        font-size: 24pt;
      }
    }
  }

  @media screen and (max-width: 576px) {
    .inner {
      width: 90%;

      & > span {
        font-size: 21pt;
      }
    }
  }

  .bgLine {
    position: absolute;
    background-image: url(${BGLine});
    background-size: cover;
    background-repeat: no-repeat;
    top: 40vh;
    width: 100%;
    height: 100%;
  }
`;
