import { create } from 'zustand';
import { authApi } from '../services/api/authApi';

interface AuthState {
  user: any | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, profileData: any) => Promise<void>;
  logout: () => void;
}

export const useAuthVM = create<AuthState>((set) => ({
  user: null,
  isLoading: false,
  error: null,
  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const data = await authApi.login(email, password);
      set({ user: data.user, isLoading: false });
    } catch (e: any) {
      set({ error: e.response?.data?.message || 'Ошибка входа', isLoading: false });
    }
  },
  register: async (email, password, profileData) => {
    set({ isLoading: true, error: null });
    try {
      const data = await authApi.register(email, password, profileData);
      set({ user: data.user, isLoading: false });
    } catch (e: any) {
      set({ error: e.response?.data?.message || 'Ошибка регистрации', isLoading: false });
    }
  },
  logout: () => set({ user: null }),
}));
