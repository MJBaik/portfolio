import React from "react";
import { IProject } from "../../constants/projects";
import { ItemWrapper } from "../../styles/Projects/item";
import { HiArrowUpRight } from "react-icons/hi2";
import { useModalActions } from "../../stores/modalStore";

function ProjectsItem({ pjt }: { pjt: [string, IProject] }) {
  const [name, project] = pjt;
  const { setIsModalOpen, setModalContent } = useModalActions();

  const openModal = () => {
    const selected = name as
      | "cloudy"
      | "talkydoki"
      | "logintoyou"
      | "collect"
      | null;
    setIsModalOpen(true);
    setModalContent(selected);
  };

  return (
    <ItemWrapper onClick={() => openModal()}>
      <p>{project.title}</p>
      <HiArrowUpRight className="arrow" />
    </ItemWrapper>
  );
}

export default React.memo(ProjectsItem);
