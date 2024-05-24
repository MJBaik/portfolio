import styled from "styled-components";
import { Section } from "../common/components";
import SkillImg from "../../assets/images/skillBg.jpg";

export const SkillSection = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 130vh;
  position: relative;

  @media screen and (max-width: 576px) {
    height: 100vh;
  }
`;

export const SkillWrapper = styled.div`
  width: fit-content;
  height: 100vh;
  position: relative;
  padding: 10px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h1 {
    font-size: 24pt;
    color: rgb(var(--text-sub));
    font-weight: 100;
    margin: 10px 0;

    @media screen and (max-width: 576px) {
      color: white;
    }
  }
`;

export const SkillItem = styled.div<{ $color: string }>`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  border: 2px solid rgb(var(--border));
  position: relative;

  background-color: rgba(var(--border), 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  box-shadow: 0 0 3px 3px rgba(var(--border), 0.2);
  padding: 20px;
  margin: 3px;

  & > span {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: none;
    justify-content: center;
    align-items: center;
    font-size: 10pt;
    font-weight: 600;
    color: #fff;
  }

  & > svg {
    fill: rgba(var(--bg-modal), 0.8);
    transition: fill 0.8s ease;

    @media screen and (max-width: 576px) {
      fill: rgba(var(--bg), 0.8);
    }
  }

  &:before {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(var(--main), 0.3);
    border-radius: 0 0 10px 10px;
    margin-top: 100%;
    transition: all 0.5s ease;
  }

  &.blank {
    &:after {
      content: "🦢";
      position: absolute;
      right: -30px;
      bottom: 30px;
      display: none;
    }
  }

  @keyframes duck {
    10% {
      transform: translateX(0) translateY(0);
    }
    30% {
      transform: translateX(-80px) translateY(3px);
    }
    50% {
      transform: translateX(-160px) translateY(-3px);
    }
    70% {
      transform: translateX(-240px) translateY(3px);
    }
    100% {
      transform: translateX(-350px);
    }
  }

  &:hover {
    & > svg {
      fill: ${(props) => props.$color};
      opacity: 0.3;
    }

    & > span {
      display: flex;
      z-index: 1;
    }

    &:before {
      margin-top: 0;
      border-radius: 10px;
      z-index: 0;
    }

    &.blank {
      overflow: hidden;
      &:before {
        border-radius: 0 0 10px 10px;
        margin-top: 60px;
        border-top: 4px solid rgba(var(--main), 0.4);
      }

      &:after {
        display: block;
        animation: duck 8s linear infinite;
      }
    }
  }

  @media screen and (max-width: 992px) {
    width: 80px;
    height: 80px;
    padding: 10px;

    &:hover {
      &.blank {
        &:before {
          margin-top: 40px;
        }
      }
    }
  }

  @media screen and (max-width: 576px) {
    width: 50px;
    height: 50px;
    padding: 5px;

    &:hover {
      &.blank {
        &:after {
          display: none;
        }
      }
    }
  }
`;

export const SkillItems = styled.div<{ $last: number }>`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;

  ${SkillItem}:nth-child(${(props) => props.$last}) {
    width: ${(props) => (props.$last === 6 ? "" : "auto")};
    grid-column: ${(props) => `${props.$last % 6} / 7`};
  }
`;

export const SkillTitle = styled.h1`
  width: 50vw;
  min-width: 500px;
  height: 400px;
  background-image: url(${SkillImg});
  background-size: cover;
  background-position: bottom;
  position: absolute;
  z-index: 0;
  right: 0;
  bottom: 15vh;
  opacity: 0;
  transition: opacity 1.5s ease;

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

  & > div {
    width: 100%;
    height: 100%;
    position: relative;

    & > h1 {
      color: white;
      position: absolute;
      right: 10px;
      bottom: 0;
      font-weight: 100;
      font-size: 36pt;
    }
  }

  @media screen and (max-width: 576px) {
    width: 100%;
    height: 650px;
    bottom: 10vh;
  }
`;
