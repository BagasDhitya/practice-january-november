import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  id: number;
  name: string;
  email: string;
};

type AuthState = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      loading: false,
      error: null,

      login: async (email, password) => {
        try {
          set({ loading: true, error: null });

          // 🔥 SIMULASI API CALL
          await new Promise((resolve) => setTimeout(resolve, 1000));

          if (email !== "admin@mail.com" || password !== "123456") {
            throw new Error("Invalid credentials");
          }

          const fakeUser = {
            id: 1,
            name: "Admin",
            email,
          };

          const fakeToken = "fake-jwt-token";

          set({
            user: fakeUser,
            token: fakeToken,
            isAuthenticated: true,
            loading: false,
          });
        } catch (err: any) {
          set({
            error: err.message,
            loading: false,
          });
        }
      },

      logout: () => {
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        });
      },
    }),
    {
      name: "auth-storage",
    },
  ),
);
