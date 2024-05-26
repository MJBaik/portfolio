import styled from "styled-components";
import { Section } from "../common/components";

export const ProjectSection = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProjectWrapper = styled.div`
  width: calc(100% - 60px);
  height: calc(100% - 60px);
  display: flex;

  .items {
    width: 40%;
  }

  .preview {
    width: 60%;
  }

  @media screen and (max-width: 992px) {
    .items {
      width: 100%;
    }
    .preview {
      display: none;
    }
  }

  @media screen and (max-width: 576px) {
  }
`;
