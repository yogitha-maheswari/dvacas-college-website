import { create } from "zustand";

interface UIState {
  mobileMenuOpen: boolean;
  bannerDismissed: boolean;
  hasLoaded: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  toggleMobileMenu: () => void;
  dismissBanner: () => void;
  markLoaded: () => void;
}

const BANNER_KEY = "dvacas:banner-dismissed";
const LOADED_KEY = "dvacas:has-loaded";

const initialBanner = typeof window !== "undefined" && sessionStorage.getItem(BANNER_KEY) === "1";
const initialLoaded = typeof window !== "undefined" && sessionStorage.getItem(LOADED_KEY) === "1";

export const useUIStore = create<UIState>((set) => ({
  mobileMenuOpen: false,
  bannerDismissed: initialBanner,
  hasLoaded: initialLoaded,
  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
  toggleMobileMenu: () => set((s) => ({ mobileMenuOpen: !s.mobileMenuOpen })),
  dismissBanner: () => {
    if (typeof window !== "undefined") sessionStorage.setItem(BANNER_KEY, "1");
    set({ bannerDismissed: true });
  },
  markLoaded: () => {
    if (typeof window !== "undefined") sessionStorage.setItem(LOADED_KEY, "1");
    set({ hasLoaded: true });
  },
}));
