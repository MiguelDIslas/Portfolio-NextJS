import { create } from "zustand";

/**
 * Layout state
 */
interface LayoutState {
  /**
   * Navigation toggle state
   */
  navToggle: boolean;

  /**
   * Active route state
   */
  activeRoute: string;

  /**
   * Function to toggle navigation
   */
  toggleNav: () => void;

  /**
   * Function to set the active route
   */
  setActiveRoute: (route: string) => void;
}

export const useLayout = create<LayoutState>((set) => ({
  navToggle: false,
  activeRoute: "",
  toggleNav: () => set((state) => ({ navToggle: !state.navToggle })),
  setActiveRoute: (route) => set({ activeRoute: route }),
}));
