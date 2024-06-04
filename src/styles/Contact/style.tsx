import styled from "styled-components";
import { Section } from "../common/components";

export const ContactSetion = styled(Section)`
  height: 80vh;
  background-color: rgb(var(--text));
  color: rgb(var(--bg));
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  * {
    color: rgb(var(--bg));
    font-weight: 100;
  }

  .icon {
    font-size: 24pt;
    margin: 10px;

    &:hover,
    &:active {
      * {
        color: rgb(var(--red));
      }
    }
  }

  .inner {
    width: 100%;
    max-width: 1280px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (max-width: 992px) {
    .inner {
      flex-direction: column;

      & > div {
        margin: 10px 0;
      }
    }
  }
`;
