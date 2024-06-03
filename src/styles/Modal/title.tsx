import styled from "styled-components";

export const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;

  & > h1 {
    font-size: 24pt;
  }

  .icons {
    height: 30px;
    margin-left: 10px;

    img {
      width: 25px;
      margin: 0 5px;
    }
  }
`;
