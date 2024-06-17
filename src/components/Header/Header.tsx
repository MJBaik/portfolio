import React, { useEffect, useRef } from "react";
import {
  AboutButton,
  HeaderAtag,
  HeaderInner,
  HeaderSection,
  HeaderTitle,
} from "../../styles/Header/style";
import Video from "../../assets/images/bgMovie.mp4";
import { useLanguageStore } from "../../stores/languageStore";

function Header() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { language, setLanguage } = useLanguageStore();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  const changeLanguage = (lan: "ko" | "en" | "jp") => {
    setLanguage(lan);
  };

  return (
    <HeaderSection id="header">
      <AboutButton>
        <button
          onClick={() => changeLanguage("ko")}
          className={language === "ko" ? "now" : undefined}
        >
          한
        </button>
        <button
          onClick={() => changeLanguage("jp")}
          className={language === "jp" ? "now" : undefined}
        >
          日
        </button>
        {/* <button
          onClick={() => changeLanguage("en")}
          className={language === "en" ? "now" : undefined}
        >
          EN
        </button> */}
      </AboutButton>
      <HeaderTitle>
        <div className="titleInner">
          <h1>Frontend Developer</h1>
          <h1>Minjung Baik</h1>
        </div>
      </HeaderTitle>
      <HeaderAtag>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </HeaderAtag>
      <HeaderInner>
        <video ref={videoRef} src={Video} muted autoPlay loop />
      </HeaderInner>
    </HeaderSection>
  );
}

export default React.memo(Header);
