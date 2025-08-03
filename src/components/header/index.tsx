"use client";

import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu, LogOut, User } from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
import { Avatar, AvatarFallback } from "../ui/avatar";

export function Header() {
  const { user, isAuthenticated, logout } = useAuth();
  const itensMenu = ["Loja atlética"];
  return (
    <header className="bg-[#151515] h-[100px] text-white px-6 py-4 shadow-md flex justify-between items-center fixed w-[100%] z-50">
      <div className="text-xl font-bold tracking-wide ">
        <img
          className="max-w-[300px] h-[80px] w-[80px]"
          src="/logoAtletica.png"
          alt="Logo"
        />
      </div>

      <div className="sm:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <div className="bg-none">
              <Menu />
            </div>
          </SheetTrigger>
          <SheetContent className="bg-[#151515]">
            <SheetHeader>
              <SheetTitle className="text-white">Menu</SheetTitle>
              <SheetDescription className="text-gray-400">
                Navegue pelo site da Atlética
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-4 p-4">
              <Link href="/" className="text-white hover:text-[#95001D] transition-colors">
                Home
              </Link>
              <Link href="/loja atlética" className="text-white hover:text-[#95001D] transition-colors">
                Loja atlética
              </Link>
              
              {isAuthenticated ? (
                <div className="mt-4 border-t border-[#333] pt-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="h-8 w-8 bg-[#95001D]">
                      <AvatarFallback className="text-white">
                        {user?.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-white">{user?.name}</span>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full text-white border-[#333] hover:bg-[#95001D] hover:text-white"
                    onClick={() => logout()}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Sair
                  </Button>
                </div>
              ) : (
                <Link href="/login" className="text-white hover:text-[#95001D] transition-colors">
                  Login / Cadastro
                </Link>
              )}
            </div>
            <SheetFooter className="text-gray-500 text-xs">
              © 2025 Atlética Fatec Zona Sul
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      <nav className="hidden sm:block">
        <ul className="flex gap-10 items-center">
          <li className="cursor-pointer relative group transition">
            <Link href={`/`}>Home</Link>
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#95001D] transition-all duration-300 group-hover:w-full"></span>
          </li>
          {itensMenu.map((item, index) => (
            <li key={item} className="cursor-pointer relative group transition">
              <Link href={`/${itensMenu[index].toLowerCase()}`}>
                {itensMenu[index]}
              </Link>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#95001D] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
          
          {isAuthenticated ? (
            <li className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8 bg-[#95001D]">
                  <AvatarFallback className="text-white">
                    {user?.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <span>{user?.name}</span>
              </div>
              <Button 
                variant="ghost" 
                size="sm"
                className="text-white hover:bg-[#95001D] hover:text-white"
                onClick={() => logout()}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sair
              </Button>
            </li>
          ) : (
            <li className="cursor-pointer relative group transition">
              <Link href="/login">Login</Link>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#95001D] transition-all duration-300 group-hover:w-full"></span>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
