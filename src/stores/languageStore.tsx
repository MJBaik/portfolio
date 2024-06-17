import { create } from "zustand";

interface ILanguageStore {
  language: "ko" | "jp" | "en";
  setLanguage: (lan: "ko" | "jp" | "en") => void;
}

export const useLanguageStore = create<ILanguageStore>((set) => ({
  language: "ko",
  setLanguage: (lan) => set({ language: lan }),
}));
