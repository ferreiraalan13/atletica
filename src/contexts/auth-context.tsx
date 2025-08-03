"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verificar se existe um token no localStorage
    const token = localStorage.getItem("atletica-token");
    if (token) {
      // Em um cenário real, você validaria o token com sua API
      // Por enquanto, vamos apenas simular um usuário logado
      const storedUser = localStorage.getItem("atletica-user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
        setIsAuthenticated(true);
      }
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Simulando uma chamada de API
      // Em um cenário real, você faria uma requisição para seu backend
      
      // Simulando um delay de rede
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulando um usuário retornado pela API
      const mockUser = {
        id: "1",
        name: "Usuário Teste",
        email
      };
      
      // Simulando um token JWT
      const mockToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6IlVzdcOhcmlvIFRlc3RlIiwiaWF0IjoxNTE2MjM5MDIyfQ";
      
      // Salvando no localStorage
      localStorage.setItem("atletica-token", mockToken);
      localStorage.setItem("atletica-user", JSON.stringify(mockUser));
      
      setUser(mockUser);
      setIsAuthenticated(true);
      
      return true;
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      return false;
    }
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      // Simulando uma chamada de API para registro
      // Em um cenário real, você faria uma requisição para seu backend
      
      // Simulando um delay de rede
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulando um usuário criado
      const mockUser = {
        id: "1",
        name,
        email
      };
      
      // Simulando um token JWT
      const mockToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6IlVzdcOhcmlvIFRlc3RlIiwiaWF0IjoxNTE2MjM5MDIyfQ";
      
      // Salvando no localStorage
      localStorage.setItem("atletica-token", mockToken);
      localStorage.setItem("atletica-user", JSON.stringify(mockUser));
      
      setUser(mockUser);
      setIsAuthenticated(true);
      
      return true;
    } catch (error) {
      console.error("Erro ao registrar:", error);
      return false;
    }
  };

  const logout = () => {
    // Remover dados do localStorage
    localStorage.removeItem("atletica-token");
    localStorage.removeItem("atletica-user");
    
    // Limpar estado
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}