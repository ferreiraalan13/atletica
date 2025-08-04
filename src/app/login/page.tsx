"use client";

import { useState } from "react";
import { LoginForm } from "@/components/auth/login-form";
import { RegisterForm } from "@/components/auth/register-form";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  return (
    <div className="min-h-[calc(100vh-100px)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-[#1a1a1a] rounded-lg shadow-xl overflow-hidden">
        <div className="flex border-b border-[#333]">
          <Button
            variant="ghost"
            className={`flex-1 rounded-none py-4 ${activeTab === "login" ? "bg-[#95001D] text-white" : "text-gray-400"}`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </Button>
          <Button
            variant="ghost"
            className={`flex-1 rounded-none py-4 ${activeTab === "register" ? "bg-[#95001D] text-white" : "text-gray-400"}`}
            onClick={() => setActiveTab("register")}
          >
            Cadastro
          </Button>
        </div>

        <div className="p-6">
          {activeTab === "login" ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    </div>
  );
}