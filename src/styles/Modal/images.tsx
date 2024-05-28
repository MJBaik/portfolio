import styled from "styled-components";

export const ImageWrapper = styled.div<{ $num: number }>`
  width: 35vw;
  height: 90%;
  position: absolute;
  right: 5vw;
  bottom: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .mainImage {
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: contain;
  }

  .thumbnail {
    width: 100%;
    display: flex;
    justify-content: space-between;
    overflow-x: auto;

    & > img {
      cursor: pointer;
      padding: 5px;
      background-color: rgba(var(--bg-modal), 0.2);
      width: 50px;
      height: 50px;
    }
  }

  @media screen and (max-width: 992px) {
    display: none;
  }
`;
