import { create } from "zustand";

type UserState = {
  user: unknown;
  setUser: (newUser: unknown) => void;
};

export const useUserStore = create<UserState>()((set) => ({
  user: false,
  setUser: (newUser) => set({ user: newUser }),
}));
