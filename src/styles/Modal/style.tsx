import styled from "styled-components";
import { Section } from "../common/components";

export const ModalContainer = styled(Section)`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(18, 18, 18, 0.5);
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @keyframes open {
    0% {
      transform: translateY(100vh);
    }
    100% {
      transform: translateY(0);
    }
  }

  .inner {
    width: 100%;
    height: calc(100vh - 50px);
    background-color: rgba(var(--bg), 1);
    border-radius: 25px 25px 0 0;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    padding: 30px 70px;
    animation: open 0.2s ease;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .close {
    font-size: 21pt;
    position: absolute;
    right: 30px;
    top: 30px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  @media screen and (max-width: 992px) {
    .inner {
      overflow-y: auto;
      padding: 70px 40px 0 40px;
      flex-direction: column;
    }

    .contents {
      display: flex;
      flex-direction: column;
    }
  }
`;
