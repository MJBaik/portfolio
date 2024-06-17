import React, { useEffect, useMemo, useRef } from "react";
import {
  useIsModalOpen,
  useModalActions,
  useModalContent,
} from "../../stores/modalStore";
import { ModalContainer } from "../../styles/Modal/style";
import { TfiClose } from "react-icons/tfi";
import { project_kr, project_jp, project_en } from "../../constants/projects";
import ModalDescription from "./ModalDescription";
import ModalImage from "./ModalImage";
import { useLanguageStore } from "../../stores/languageStore";

function Modal() {
  const { language } = useLanguageStore();

  const modalRef = useRef<HTMLDivElement>(null);
  const isModalOpen = useIsModalOpen();
  const modalContent = useModalContent();
  const { setIsModalOpen } = useModalActions();
  const project = useMemo(() => {
    if (modalContent) {
      if (language === "ko") return project_kr[modalContent];
      if (language === "jp") return project_jp[modalContent];
      if (language === "en") return project_en[modalContent];

      return project_kr[modalContent];
    } else {
      return null;
    }
  }, [modalContent, language]);

  const autoClose = (e: MouseEvent) => {
    const modal = modalRef.current;
    const target = e.target as HTMLElement;
    if (!modal) return;

    if (!modal.contains(target)) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      window.addEventListener("mousedown", autoClose);
      return () => window.removeEventListener("mousedown", autoClose);
    }
  }, [isModalOpen]);

  if (!isModalOpen || !project) return <></>;
  return (
    <ModalContainer>
      <div className="inner" ref={modalRef}>
        <TfiClose className="close" onClick={() => setIsModalOpen(false)} />
        <ModalDescription project={project} />
        <ModalImage thumbs={project.thumbnails} images={project.images} />
      </div>
    </ModalContainer>
  );
}

export default React.memo(Modal);
