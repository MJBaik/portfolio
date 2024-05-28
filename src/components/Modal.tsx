import React, { useEffect, useMemo, useRef } from "react";
import {
  useIsModalOpen,
  useModalActions,
  useModalContent,
} from "../stores/modalStore";
import { ModalContainer } from "../styles/Modal/style";
import { TfiClose } from "react-icons/tfi";
import { projectItems } from "../constants/projects";
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

  const preventScroll = (e: MouseEvent) => {
    e.preventDefault();
  };

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
      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("mousedown", autoClose);
      return () => {
        window.removeEventListener("wheel", preventScroll);
        window.removeEventListener("mousedown", autoClose);
      };
    }
  }, [isModalOpen]);

  if (!isModalOpen || !project) return <></>;
  return (
    <ModalContainer>
      <div className="inner" ref={modalRef}>
        <ModalImage images={project.images} />
        <div className="contents">
          <TfiClose className="close" onClick={() => setIsModalOpen(false)} />
          <ModalDescription project={project} />
        </div>
      </div>
    </ModalContainer>
  );
}

export default React.memo(Modal);
