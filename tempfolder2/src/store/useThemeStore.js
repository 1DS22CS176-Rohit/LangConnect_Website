import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("langconnect-theme") || "night",
  setTheme: (theme) => {
    localStorage.setItem("langconnect-theme", theme);
    set({ theme });
  },
}));
