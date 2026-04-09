import { create } from "zustand";

interface NavbarState {
    isOpen: boolean;
    toggle: () => void;
    close: () => void;
    open: () => void;
}

export const useNavbarStore = create<NavbarState>((set) => ({
    isOpen: false,
    toggle: () => set((state) => ({ isOpen: !state.isOpen })),
    close: () => set({ isOpen: false}),
    open: () => set({ isOpen: true }),
}))