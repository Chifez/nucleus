import { create } from 'zustand';

interface SideBarState {
  isOpen: boolean;
  toggleOpen: () => void;
}

const useSideBarState = create<SideBarState>((set) => ({
  isOpen: false,
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useSideBarState;
