import { ProjectSection, ProjectWrapper } from "../styles/Projects/style";
import ProjectsItem from "./ProjectsItem";

function Projects() {
  return (
    <ProjectSection id="projects">
      <ProjectWrapper>
        <div className="items">
          <ProjectsItem></ProjectsItem>
          <ProjectsItem></ProjectsItem>
          <ProjectsItem></ProjectsItem>
          <ProjectsItem></ProjectsItem>
        </div>
        <div className="preview"></div>
      </ProjectWrapper>
    </ProjectSection>
  );
}

export default Projects;
