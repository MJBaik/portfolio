import { useEffect, useMemo, useRef } from "react";
import { project_kr, project_jp, project_en } from "../../constants/projects";
import { ProjectSection, ProjectWrapper } from "../../styles/Projects/style";
import ProjectsItem from "./ProjectsItem";
import { useLanguageStore } from "../../stores/languageStore";

function Projects() {
  const projectRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguageStore();
  const projectItems = useMemo(() => {
    switch (language) {
      case "ko":
        return project_kr;
      case "jp":
        return project_jp;
      case "en":
        return project_en;
    }
  }, [language]);

  const scrollHandler = () => {
    const project = projectRef.current;
    if (!project) return;
    if (window.scrollY > window.innerHeight * 2.45) {
      project.classList.add("view");
      window.removeEventListener("scroll", scrollHandler);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <ProjectSection>
      <ProjectWrapper id="projects" ref={projectRef}>
        <div className="items">
          <h1 className="title">Projects</h1>
          {Object.entries(projectItems).map((e, i) => (
            <ProjectsItem key={i} pjt={e} />
          ))}
        </div>
        <div className="preview" />
      </ProjectWrapper>
    </ProjectSection>
  );
}

export default Projects;
