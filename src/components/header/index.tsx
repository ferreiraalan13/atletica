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
import { Menu } from "lucide-react";

export function Header() {
  const itensMenu = ["Contatos", "Dashboard", "Postagens"];
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
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Cli done.
              </SheetDescription>
            </SheetHeader>
            <SheetFooter>
              <SheetClose asChild>
                <Button variant="outline">Close</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      <nav className="hidden sm:block">
        <ul className="flex gap-10">
          <li className="cursor-pointer relative group transition">
            <Link href={`/`}>Home</Link>
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#95001D] transition-all duration-300 group-hover:w-full"></span>
          </li>
          {itensMenu.map((item, index) => (
            <li key={item} className="cursor-pointer relative group transition">
              <Link href={`/${itensMenu[index].toLowerCase()}`}>
                {itensMenu[index]}
              </Link>
              {/* <span className="group-hover:text-blue-300 transition-colors duration-200">
                {item}
              </span> */}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#95001D]  transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
