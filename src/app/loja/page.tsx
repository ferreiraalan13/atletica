import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/auth-context";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";

export default function PerfilPage() {
  return (
    <div className="min-h-[calc(100vh-100px)] flex items-center justify-center px-4 py-12">
      <h1 className="text-white">LOJA</h1>
    </div>
  );
}
