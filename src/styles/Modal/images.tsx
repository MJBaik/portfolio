import styled from "styled-components";

export const ImageWrapper = styled.div<{ $num: number }>`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .imageBox {
    width: 100%;
    height: 50%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .notice {
      color: rgb(var(--text-sub));
    }
  }

  .mainImage {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: contain;
    margin: 20px 0;
  }

  .notice {
    margin: 0;
  }

  .thumbnail {
    width: 100%;
    display: flex;
    justify-content: space-between;
    overflow-x: auto;

    & > img {
      cursor: pointer;
      background-color: rgba(var(--bg-modal), 0.1);
      width: 50px;
      height: 50px;
      padding: 3px;
    }
  }

  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;
