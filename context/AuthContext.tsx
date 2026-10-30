import { createContext, useContext, useState, type ReactNode } from "react";

// Chave usada para salvar SOMENTE o nome do usuário
const STORAGE_KEY = "conectapro:nome";

interface AuthContextValue {
  nome: string;
  isAuthenticated: boolean;
  login: () => void;
  register: (nome: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

// localStorage pode estar indisponível (modo privado, etc.), por isso o try/catch
const lerNome = (): string => {
  try {
    return localStorage.getItem(STORAGE_KEY) ?? "";
  } catch {
    return "";
  }
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [nome, setNome] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Login visual: usa o nome salvo no cadastro (ou "Usuário" se não houver)
  const login = () => {
    setNome(lerNome() || "Usuário");
    setIsAuthenticated(true);
  };

  // Cadastro: persiste apenas o nome e já inicia a sessão
  const register = (novoNome: string) => {
    try {
      localStorage.setItem(STORAGE_KEY, novoNome);
    } catch {
      /* ignora falha de armazenamento */
    }
    setNome(novoNome);
    setIsAuthenticated(true);
  };

  // Logoff: encerra a sessão (em memória). O nome salvo permanece no navegador.
  const logout = () => {
    setNome("");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ nome, isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth deve ser usado dentro de <AuthProvider>");
  return ctx;
}
