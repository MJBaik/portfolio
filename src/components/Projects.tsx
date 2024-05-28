import { projectItems } from "../constants/projects";
import { ProjectSection, ProjectWrapper } from "../styles/Projects/style";
import ProjectsItem from "./ProjectsItem";

function Projects() {
  return (
    <ProjectSection>
      <ProjectWrapper id="projects">
        <div className="items">
          <h1 className="title">Projects</h1>
          {Object.entries(projectItems).map((e, i) => (
            <ProjectsItem key={i} pjt={e} />
          ))}
        </div>
        <div className="preview">Projects</div>
      </ProjectWrapper>
    </ProjectSection>
  );
}

export default Projects;
