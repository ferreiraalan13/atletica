import { CarouselPlugin } from "@/components/carousel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atlética Fatec Zona Sul",
  description: "Bem vindo ao nosso site",
  openGraph: {
    title: "Atlética Fatec Zona Sul",
    description: "Bem vindo ao nosso site",
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

export const revalidate = 10;

export default function Home() {
  const random = Math.random();
  return (
    <div className="h-[calc(100vh-100px)] w-full flex flex-col">
      <div className="w-full sm:h-[50%]  bg-amber-200 flex justify-center items-center">
        <img
          src="/transform.jpg"
          alt="Imagem responsiva"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-[10%] bg-[#95001D]  flex justify-center items-center">
        <ul className="flex gap-10 text-[#e4e4e4] font-bold">
          <li className="flex flex-col justify-items-center">
            <h1>Modalidades</h1>
            <h1 className="text-center">16</h1>
          </li>
          <li className="flex flex-col justify-items-center">
            <h1>Atletas</h1>
            <h1 className="text-center">+50</h1>
          </li>
          <li className="flex flex-col justify-items-center">
            <h1>Torcida</h1>
            <h1 className="text-center">+300</h1>
          </li>
        </ul>
      </div>
      <div className="w-full flex flex-col flex-1  ">
        <div className="text-3xl text-center text-[#cc1338] font-bold  bg-white">
          GESTÃO 2025
        </div>

        <div className="w-[100%] sm:w-[50%]">
          <CarouselPlugin />
        </div>
      </div>

      <div className="w-full flex-col mt-10">
        <div className="pl-2 text-3xl text-left text-[#cc1338] font-bold">
          Nossa história
        </div>
        <div className="w-[100%] pl-2 sm:w-[50%] text-amber-50">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ea,
          earum quisquam facere, ex porro quia voluptate nisi nam perferendis
          dolor expedita laboriosam delectus commodi saepe non distinctio nulla
          beatae. rum quisquam facere, ex porro quia voluptate nisi nam
          perferendis dolor expedita laboriosam delectus commodi saepe non
          distinctio nulla beatae
        </div>
      </div>

      <div className="w-full flex-col mt-10 pt-2 bg-[#cc1338]">
        <div className="pl-2 text-3xl text-center text-white font-bold">
          Modalidades
        </div>
        <div className="w-full text-amber-50 p-3">
          A Atlética está de portas abertas para você que quer se movimentar,
          fazer novos amigos e viver intensamente o espírito universitário! São
          41 modalidades esportivas para todos os gostos — desde os esportes
          mais tradicionais até os mais alternativos. Não importa se você já é
          atleta ou quer começar agora: sempre tem espaço para quem quer
          participar com garra, diversão e espírito de equipe. Escolha a
          modalidade que mais combina com você e faça parte dessa energia!
        </div>

        {/* Grid de imagens responsivo */}
        <div className="grid grid-cols-2 md:flex md:flex-row md:justify-center gap-2 p-4">
          <img
            src="/esportes/baska1.png"
            alt=""
            className="w-full md:w-1/4 h-[300px] sm:h-[400px] object-cover shadow-lg"
          />
          <img
            src="/esportes/baska2.png"
            alt=""
            className="w-full md:w-1/4 h-[300px] sm:h-[400px] object-cover shadow-lg"
          />
          <img
            src="/esportes/volei1.png"
            alt=""
            className="w-full md:w-1/4 h-[300px] sm:h-[400px] object-cover shadow-lg"
          />
          <img
            src="/esportes/volei2.png"
            alt=""
            className="w-full md:w-1/4 h-[300px] sm:h-[400px] object-cover shadow-lg"
          />
        </div>
      </div>

      <div className="w-full flex-col mt-10 pb-10" data-aos="fade-right">
        <div className="pl-2 text-3xl text-left text-[#cc1338] font-bold">
          Ter um efeito para aparecer quando rolar a tela
        </div>
        <div className="w-[100%] pl-2 sm:w-[50%] text-amber-50  ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ea,
          earum quisquam facere, ex porro quia voluptate nisi nam perferendis
          dolor expedita laboriosam delectus commodi saepe non distinctio nulla
          beatae. rum quisquam facere, ex porro quia voluptate nisi nam
          perferendis dolor expedita laboriosam delectus commodi saepe non
          distinctio nulla beatae
        </div>
      </div>
    </div>
  );
}
