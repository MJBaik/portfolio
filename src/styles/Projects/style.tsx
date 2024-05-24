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

  background-color: rgba(var(--border), 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 2px solid rgb(var(--border));
  border-radius: 10px;

  .items {
    width: 40%;
    border-right: 2px solid rgb(var(--border));
  }

  .preview {
    width: 60%;
  }
`;
