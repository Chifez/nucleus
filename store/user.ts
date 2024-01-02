import { create } from 'zustand';

interface UserState {
  user: boolean;
  login: () => void;
  logout: () => void;
  register: () => void;
}

const useUserState = create<UserState>((set) => ({
  user: false,
  login: () => set(() => ({ user: true })),
  logout: () => set(() => ({ user: false })),
  register: () => set(() => ({ user: true })),
}));

export default useUserState;
