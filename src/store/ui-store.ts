import { create } from "zustand";

/**
 * Global UI state that genuinely spans the component tree (header toggle ↔
 * mobile drawer live in different branches). Anything used by one component
 * stays in local state — see docs/04-global-state.md.
 */
interface UiState {
  isMobileNavOpen: boolean;
  openMobileNav: () => void;
  closeMobileNav: () => void;
  toggleMobileNav: () => void;
}

export const useUiStore = create<UiState>()((set) => ({
  isMobileNavOpen: false,
  openMobileNav: () => set({ isMobileNavOpen: true }),
  closeMobileNav: () => set({ isMobileNavOpen: false }),
  toggleMobileNav: () => set((state) => ({ isMobileNavOpen: !state.isMobileNavOpen })),
}));

/* Atomic selectors — components subscribe only to the slice they read. */
export const selectIsMobileNavOpen = (state: UiState) => state.isMobileNavOpen;
export const selectOpenMobileNav = (state: UiState) => state.openMobileNav;
export const selectCloseMobileNav = (state: UiState) => state.closeMobileNav;
