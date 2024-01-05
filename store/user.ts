import { create } from 'zustand';

interface UserState {
  user: string | null;
  setUser: (currentUser: string) => void;
}

const useUserState = create<UserState>((set) => ({
  user: null,
  setUser: (currentUser) => set((state) => ({ user: currentUser })),
}));

export default useUserState;
