import { IProject } from "../../constants/projects";
import { ModalDescWrapper } from "../../styles/Modal/description";
import ModalDescSet from "./ModalDescSet";
import ModalTitle from "./ModalTitle";

type Props = {
  project: IProject;
};

function ModalDescription({ project }: Props) {
  return (
    <ModalDescWrapper>
      <ModalTitle title={project.title} link={project.link} />
      <ModalDescSet subtitle="개요(인원)" desc={project.desc} />
      <ModalDescSet subtitle="주요 기능" desc={project.pjt} />
      <ModalDescSet
        subtitle="사용 기술"
        desc={project.skills.map((e, i) => (
          <span key={i}>
            {e}
            {i === project.skills.length - 1 ? "" : ","}{" "}
          </span>
        ))}
      />
      <ModalDescSet subtitle="담당 역할" desc={project.mywork} />
      <ModalDescSet subtitle="상세" desc={project.detail} />
      <ModalDescSet subtitle="비고" desc={project.etc} />
    </ModalDescWrapper>
  );
}

export default ModalDescription;
