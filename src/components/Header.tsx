import React from "react";
import {
  AboutButton,
  HeaderAtag,
  HeaderInner,
  HeaderSection,
  HeaderTitle,
} from "../styles/Header/style";

function Header() {
  return (
    <HeaderSection id="header">
      <AboutButton>About</AboutButton>
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
      <HeaderInner />
    </HeaderSection>
  );
}

export default React.memo(Header);
