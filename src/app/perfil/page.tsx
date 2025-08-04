"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/auth-context";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";

export default function PerfilPage() {
  const { user, isAuthenticated, logout } = useAuth();
  const router = useRouter();

  // // Redirecionar para login se não estiver autenticado
  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     router.push("/login");
  //   }
  // }, [isAuthenticated, router]);

  // // Se não estiver autenticado, não renderiza nada
  // if (!isAuthenticated || !user) {
  //   return null;
  // }

  return (
    <div className="min-h-[calc(100vh-100px)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-[#1a1a1a] rounded-lg shadow-xl overflow-hidden p-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <Avatar className="h-24 w-24 bg-[#95001D]">
            <AvatarFallback className="text-white text-2xl">
              {user?.name?.charAt(0)}
            </AvatarFallback>
          </Avatar>

          <h1 className="text-2xl font-bold text-white">{user?.name}</h1>
          <p className="text-gray-400">{user?.email}</p>

          <div className="w-full border-t border-[#333] my-4 pt-4">
            <h2 className="text-xl font-semibold text-white mb-4">
              Informações da Conta
            </h2>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">ID:</span>
                <span className="text-white">{user?.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Status:</span>
                <span className="text-green-500">Ativo</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Membro desde:</span>
                <span className="text-white">2025</span>
              </div>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full text-white border-[#333] hover:bg-[#95001D] hover:text-white mt-4"
            onClick={() => {
              logout();
              router.push("/");
            }}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sair da conta
          </Button>
        </div>
      </div>
    </div>
  );
}
