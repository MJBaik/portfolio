import React, { useEffect, useRef } from "react";
import {
  AboutButton,
  HeaderAtag,
  HeaderInner,
  HeaderSection,
  HeaderTitle,
} from "../../styles/Header/style";
import Video from "../../assets/images/bgMovie.mp4";

function Header() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <HeaderSection id="header">
      <AboutButton></AboutButton>
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
