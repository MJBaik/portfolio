import styled from "styled-components";
import { Section } from "../common/components";
import BGImg from "../../assets/images/bg.jpg";

export const HeaderSection = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
  position: relative;
`;

export const HeaderAtag = styled.div`
  position: absolute;
  z-index: 2;
  left: 50px;
  bottom: 45%;
  display: flex;
  flex-direction: column;

  & > a {
    color: rgb(var(--bg), 0.8);
    font-size: 60pt;
    font-weight: 900;
    text-decoration: none;

    &:hover {
      color: rgb(var(--bg));
    }
  }

  @media screen and (max-width: 992px) {
    bottom: 40%;
    left: 40px;

    & > a {
      font-size: 56pt;
    }
  }

  @media screen and (max-width: 576px) {
    bottom: 35%;
    left: 30px;

    & > a {
      font-size: 42pt;
    }
  }
`;

export const HeaderInner = styled.div`
  width: 100%;
  height: 90%;
  background-image: url(${BGImg});
  background-size: cover;
  border-radius: 10px;
  z-index: 0;
  position: relative;

  &:before {
    content: " ";
    position: absolute;
    background: linear-gradient(
          to bottom,
          transparent 78px,
          rgba(var(--bg), 0.8) 78px
        )
        0 0 / 100vw 80px repeat-y,
      linear-gradient(to right, transparent 78px, rgba(var(--bg), 0.8) 78px) 0 0 /
        80px 100vh repeat-x transparent;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    border-radius: 10px;
    z-index: 1;
  }
`;

export const HeaderTitle = styled.div`
  font-family: "SokchoBadaDotum";
  position: absolute;
  z-index: 1;
  left: 9px;
  bottom: 10.5vh;

  .titleInner {
    position: relative;
    width: 100%;
    height: 100%;

    &:before {
      content: " ";
      background: radial-gradient(
        at top right,
        transparent 30px,
        rgb(var(--bg)) 0
      );
      width: 30px;
      height: 30px;
      position: absolute;
      left: 0px;
      top: -30px;
      z-index: 1;
    }

    h1 {
      position: relative;
      line-height: 1;
      margin: 0;
      width: fit-content;
      font-size: 24pt;
      background-color: rgb(var(--bg));
      border-top-right-radius: 50px;
      padding: 20px 30px;
      line-height: 0.9;

      &:before {
        content: " ";
        background: radial-gradient(
          at top right,
          transparent 30px,
          rgb(var(--bg)) 0
        );
        width: 30px;
        height: 30px;
        position: absolute;
        right: -30px;
        bottom: 0px;
      }

      &:nth-child(2) {
        font-size: 60pt;
      }
    }
  }

  @media screen and (max-width: 992px) {
    .titleInner {
      h1 {
        font-size: 24pt;

        &:nth-child(2) {
          font-size: 48pt;
        }
      }
    }
  }

  @media screen and (max-width: 576px) {
    .titleInner {
      h1 {
        font-size: 14pt;

        &:before {
          right: -25px;
          bottom: -3px;
        }

        &:nth-child(2) {
          font-size: 28pt;
        }
      }
    }
  }
`;

export const AboutButton = styled.div`
  width: 100px;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: rgb(var(--bg));
  position: absolute;
  z-index: 1;
  right: 9px;
  top: 9px;
  border-bottom-left-radius: 25px;
  font-family: "SokchoBadaDotum";
  cursor: pointer;
  font-style: italic;

  &:hover {
    color: rgb(var(--main));
  }

  &::before,
  &::after {
    content: " ";
    position: absolute;
    width: 30px;
    height: 30px;
    background: radial-gradient(
      at bottom left,
      transparent 30px,
      rgb(var(--bg)) 0
    );
  }

  &::before {
    left: -29px;
    top: 0px;
  }

  &:after {
    right: 0;
    bottom: -29px;
  }
`;
