import styled from "styled-components";
import { Section } from "../common/components";

export const ProjectSection = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProjectWrapper = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  position: relative;

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
    background-color: rgb(var(--bg-modal));
    right: 0;
    top: 30px;
    z-index: 0;
  }

  @media screen and (max-width: 992px) {
    width: calc(100% - 30px);

    .items {
      position: relative;
      width: 100%;
    }
    .preview {
      display: none;
    }
  }
`;
