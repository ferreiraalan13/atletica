"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/auth-context";

/**
 * Hook para verificar o estado de autenticação no lado do cliente
 * Útil para componentes que precisam reagir ao estado de autenticação
 */
export function useClientAuth() {
  const { user, isAuthenticated } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verificar o estado de autenticação quando o componente montar
    const checkAuth = () => {
      // Já temos o estado de autenticação do contexto
      // Apenas finalizamos o carregamento
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  return {
    user,
    isAuthenticated,
    isLoading,
  };
}