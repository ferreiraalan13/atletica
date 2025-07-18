import { Metadata } from "next";
import { Header } from "../components/header";
import "./globals.css";
import { AOSInitializer } from "@/components/aos/AOSInitializer";

export const metadata: Metadata = {
  title: "Aula Next JS do zero!",
  description: "Aprendendo NEXT JS do zero com Sujeiro Programador",
  openGraph: {
    title: "Aprendendo",
    description: "Aprendendo NEXT JS do zero com Sujeiro Programador",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`antialiased bg-[#151515]`}>
        <AOSInitializer />
        <Header />
        <main className="pt-[100px] ">{children}</main>
      </body>
    </html>
  );
}
