import React, { useEffect, useRef } from "react";
import {
  SkillItem,
  SkillItems,
  SkillSection,
  SkillTitle,
  SkillWrapper,
} from "../styles/Skills/style";
import { skillItems } from "../constants/skillItems";

function Skills() {
  const titleRef = useRef<HTMLDivElement>(null);

  const scrollHandler = () => {
    const title = titleRef.current;
    if (!title) return;
    if (window.scrollY > window.innerHeight * 1.45) {
      title.classList.add("view");
      window.removeEventListener("scroll", scrollHandler);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <SkillSection>
      <SkillWrapper id="skills">
        <h1>Frontend</h1>
        <SkillItems $last={11}>
          {Object.values(skillItems.frontend).map((e, i) => (
            <SkillItem key={i} $color={e.color}>
              <span>{e.level}</span>
              {e.tag}
            </SkillItem>
          ))}
          <SkillItem className="blank" $color={"transparent"} />
        </SkillItems>
        <h1>Backend</h1>
        <SkillItems $last={6}>
          {Object.values(skillItems.backend).map((e, i) => (
            <SkillItem key={i} $color={e.color}>
              <span>{e.level}</span>
              {e.tag}
            </SkillItem>
          ))}
        </SkillItems>
        <h1>Tools</h1>
        <SkillItems $last={4}>
          {Object.values(skillItems.tools).map((e, i) => (
            <SkillItem key={i} $color={e.color}>
              <span>{e.level}</span>
              {e.tag}
            </SkillItem>
          ))}
          <SkillItem className="blank" $color={"transparent"} />
        </SkillItems>
      </SkillWrapper>
      <SkillTitle ref={titleRef}>
        <div>
          <h1>Skills</h1>
        </div>
      </SkillTitle>
    </SkillSection>
  );
}

export default React.memo(Skills);
