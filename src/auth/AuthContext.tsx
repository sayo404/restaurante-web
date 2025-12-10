// src/auth/AuthContext.tsx
import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

interface AuthContextValue {
  estaAutenticado: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

function useProvideAuth(): AuthContextValue {
  const [estaAutenticado, setEstaAutenticado] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("estaAutenticado");
    if (stored === "true") {
      setEstaAutenticado(true);
    }
  }, []);

  function login() {
    setEstaAutenticado(true);
    localStorage.setItem("estaAutenticado", "true");
  }

  function logout() {
    setEstaAutenticado(false);
    localStorage.removeItem("estaAutenticado");
  }

  return { estaAutenticado, login, logout };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth debe usarse dentro de <AuthProvider>");
  }
  return ctx;
}
