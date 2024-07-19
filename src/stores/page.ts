import { create } from "zustand";

type State = {
  pageLoaded: boolean;
  togglePageLoaded: () => void;
};

export const usePageStore = create<State>()((set) => ({
  pageLoaded: false,
  togglePageLoaded: () => set(() => ({ pageLoaded: true })),
}));
