import React, { useEffect, useMemo, useRef } from "react";
import {
  useIsModalOpen,
  useModalActions,
  useModalContent,
} from "../../stores/modalStore";
import { ModalContainer } from "../../styles/Modal/style";
import { TfiClose } from "react-icons/tfi";
import { projectItems } from "../../constants/projects";
import ModalDescription from "./ModalDescription";
import ModalImage from "./ModalImage";

function Modal() {
  const modalRef = useRef<HTMLDivElement>(null);
  const isModalOpen = useIsModalOpen();
  const modalContent = useModalContent();
  const { setIsModalOpen } = useModalActions();
  const project = useMemo(() => {
    if (modalContent) {
      return projectItems[modalContent];
    } else {
      return null;
    }
  }, [modalContent]);

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
