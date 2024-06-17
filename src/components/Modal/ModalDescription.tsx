import { useMemo } from "react";
import { modal_en, modal_jp, modal_kr } from "../../constants/modalDesc";
import { IProject } from "../../constants/projects";
import { useLanguageStore } from "../../stores/languageStore";
import { ModalDescWrapper } from "../../styles/Modal/description";
import ModalDescSet from "./ModalDescSet";
import ModalTitle from "./ModalTitle";

type Props = {
  project: IProject;
};

function ModalDescription({ project }: Props) {
  const { language } = useLanguageStore();
  const subtitle = useMemo(() => {
    switch (language) {
      case "ko":
        return modal_kr;
      case "jp":
        return modal_jp;
      case "en":
        return modal_en;
    }
  }, [language]);

  return (
    <ModalDescWrapper>
      <ModalTitle title={project.title} link={project.link} />
      <ModalDescSet subtitle={subtitle[0]} desc={project.period} />
      <ModalDescSet subtitle={subtitle[1]} desc={project.desc} />
      <ModalDescSet subtitle={subtitle[2]} desc={project.pjt} />
      <ModalDescSet
        subtitle={subtitle[3]}
        desc={project.skills.map((e, i) => (
          <span key={i}>
            {e}
            {i === project.skills.length - 1 ? "" : ","}{" "}
          </span>
        ))}
      />
      <ModalDescSet subtitle={subtitle[4]} desc={project.mywork} />
      <ModalDescSet subtitle={subtitle[5]} desc={project.detail} />
      <ModalDescSet subtitle={subtitle[6]} desc={project.etc} />
    </ModalDescWrapper>
  );
}

export default ModalDescription;
