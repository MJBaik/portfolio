import styled from "styled-components";
import { Section } from "../common/components";
import Image from "../../assets/images/bg.jpg";

export const ProjectSection = styled(Section)`
  height: 150vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 992px) {
    height: 100vh;
  }
`;

export const ProjectWrapper = styled.div`
  width: 70%;
  height: 100vh;
  position: relative;
  display: flex;
  opacity: 0;
  transition: opacity 1.5s ease;

  .title {
    font-weight: 100;
    font-size: 24pt;
  }

  .items {
    position: absolute;
    width: 40%;
    left: 0;
    top: 0;
    z-index: 1;
  }

  .preview {
    position: absolute;
    width: 70%;
    height: calc(100% - 30px);
    background-color: rgb(var(--main));
    background-image: url(${Image});
    background-size: cover;
    right: 0;
    top: 30px;
    z-index: 0;
  }

  &.view {
    opacity: 1;

    @keyframes goUp {
      0% {
        transform: translateY(50px);
      }
      100% {
        transform: translateY(0px);
      }
    }

    animation: goUp 1.5s ease;
  }

  @media screen and (max-width: 992px) {
    width: calc(100% - 30px);

    .items {
      position: relative;
      width: 100%;
    }
    .preview {
      height: 50%;
      top: 80px;
      /* display: none; */
    }
  }
`;
