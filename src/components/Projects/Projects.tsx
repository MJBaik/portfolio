import { useEffect, useRef } from "react";
import { projectItems } from "../../constants/projects";
import { ProjectSection, ProjectWrapper } from "../../styles/Projects/style";
import ProjectsItem from "./ProjectsItem";

function Projects() {
  const projectRef = useRef<HTMLDivElement>(null);

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
