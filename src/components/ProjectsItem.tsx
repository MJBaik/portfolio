import { IProject } from "../constants/projects";
import { ItemWrapper } from "../styles/Projects/item";
import { HiArrowUpRight } from "react-icons/hi2";

function ProjectsItem({ pjt }: { pjt: IProject }) {
  const { title } = pjt;

  return (
    <ItemWrapper>
      <p>{title}</p>
      <HiArrowUpRight className="arrow" />
    </ItemWrapper>
  );
}

export default ProjectsItem;
