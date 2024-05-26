import { ProjectSection, ProjectWrapper } from "../styles/Projects/style";
import ProjectsItem from "./ProjectsItem";

function Projects() {
  return (
    <ProjectSection id="projects">
      <ProjectWrapper>
        <div className="items">
          <h1>Projects</h1>
          <ProjectsItem></ProjectsItem>
          <ProjectsItem></ProjectsItem>
          <ProjectsItem></ProjectsItem>
          <ProjectsItem></ProjectsItem>
        </div>
        <div className="preview">Projects</div>
      </ProjectWrapper>
    </ProjectSection>
  );
}

export default Projects;
