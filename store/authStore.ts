import { User } from "@/types/user";
import { create } from "zustand";

interface AuthState {
  setUser: ({ token, user }: { user?: User; token?: string }) => void;
  token: string | null;
  logout: () => void;
  user: User | null;
}

export const useAuthStore = create<AuthState>((set) => ({
  setUser: ({ token, user }) => set({ token, user }),
  logout: () => set({ token: null, user: null }),
  token: null,
  user: null,
}));
