"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/auth-context";

const registerSchema = z
  .object({
    name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
    email: z.string().email("Email inválido"),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

type RegisterFormValues = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const { register } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(data: RegisterFormValues) {
    setIsLoading(true);
    setError("");

    try {
      const success = await register(data.name, data.email, data.password);
      if (success) {
        router.push("/");
      } else {
        setError("Não foi possível criar sua conta. Tente novamente.");
      }
    } catch (error) {
      setError("Ocorreu um erro ao registrar. Tente novamente.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-white">Cadastro</h1>
        <p className="text-sm text-gray-400 mt-2">
          Crie sua conta para acessar a plataforma
        </p>
      </div>

      {error && (
        <div className="bg-red-500/10 text-red-500 p-3 rounded-md text-sm">
          {error}
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Nome</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Seu nome"
                    {...field}
                    className="bg-[#1a1a1a] border-[#333] text-white"
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="seu@email.com"
                    {...field}
                    className="bg-[#1a1a1a] border-[#333] text-white"
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Senha</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="******"
                    {...field}
                    className="bg-[#1a1a1a] border-[#333] text-white"
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Confirmar Senha</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="******"
                    {...field}
                    className="bg-[#1a1a1a] border-[#333] text-white"
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-[#95001D] hover:bg-[#7a0018] text-white"
            disabled={isLoading}
          >
            {isLoading ? "Cadastrando..." : "Cadastrar"}
          </Button>
        </form>
      </Form>
    </div>
  );
}