import { create } from "zustand";

interface IModalStore {
  modalContent: null | "cloudy" | "talkydoki" | "logintoyou" | "collect";
  isModalOpen: boolean;
  actions: {
    setModalContent: (
      by: null | "cloudy" | "talkydoki" | "logintoyou" | "collect"
    ) => void;
    setIsModalOpen: (by: boolean) => void;
  };
}

const useModalStore = create<IModalStore>((set) => ({
  modalContent: null,
  isModalOpen: false,
  actions: {
    setModalContent: (by) => set({ modalContent: by }),
    setIsModalOpen: (by) => set({ isModalOpen: by }),
  },
}));

export const useIsModalOpen = () => useModalStore((state) => state.isModalOpen);
export const useModalContent = () =>
  useModalStore((state) => state.modalContent);
export const useModalActions = () => useModalStore((state) => state.actions);
