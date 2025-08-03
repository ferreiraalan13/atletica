import { CarouselPlugin } from "@/components/carousel";
import { Metadata } from "next";
import { SlSocialInstagram } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

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

      <div className="flex flex-col">
        {/* seção de gestão */}
        <div className="w-full flex flex-col flex-1">
          <div className="text-3xl text-center text-[#cc1338] font-bold  bg-white">
            GESTÃO 2025
          </div>

          <div className="w-[100%] sm:w-[50%]">
            <CarouselPlugin />
          </div>
        </div>

        {/* seção de nossa historia */}
        <div className="w-full flex-col">
          <div className="text-3xl text-left text-[#cc1338] font-bold">
            Nossa história
          </div>
          <div className="w-[100%] text-amber-50">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
            ea, earum quisquam facere, ex porro quia voluptate nisi nam
            perferendis dolor expedita laboriosam delectus commodi saepe non
            distinctio nulla beatae. rum quisquam facere, ex porro quia
            voluptate nisi nam perferendis dolor expedita laboriosam delectus
            commodi saepe non distinctio nulla beatae
          </div>
        </div>

        {/* Seção de Modalidades */}
        <div className="w-full flex-col bg-[#cc1338]">
          <div className="text-3xl text-center text-white font-bold">
            Modalidades
          </div>
          <div className="w-full text-amber-50">
            A Atlética está de portas abertas para você que quer se movimentar,
            fazer novos amigos e viver intensamente o espírito universitário!
            São 41 modalidades esportivas para todos os gostos — desde os
            esportes mais tradicionais até os mais alternativos. Não importa se
            você já é atleta ou quer começar agora: sempre tem espaço para quem
            quer participar com garra, diversão e espírito de equipe. Escolha a
            modalidade que mais combina com você e faça parte dessa energia!
          </div>

          {/* Grid de imagens responsivo */}
          <div className="grid grid-cols-2 md:flex md:flex-row md:justify-center gap-2">
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

        {/* Seção de Eventos */}
        <div className="w-full flex-col" data-aos="fade-right">
          <div className="text-3xl text-left text-[#cc1338] font-bold">
            Eventos
          </div>
          <div className="w-[100%]  sm:w-[50%] text-amber-50  ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
            ea, earum quisquam facere, ex porro quia voluptate nisi nam
            perferendis dolor expedita laboriosam delectus commodi saepe non
            distinctio nulla beatae. rum quisquam facere, ex porro quia
            voluptate nisi nam perferendis dolor expedita laboriosam delectus
            commodi saepe non distinctio nulla beatae
          </div>
          <div className="">
            <img src="/eventos/Calourada.jpg" alt="" />
          </div>
        </div>

        {/* Seção de Endereço */}
        <div className="w-full flex-col" data-aos="fade-up">
          <div className="text-3xl text-left text-[#cc1338] font-bold w-full">
            Endereço
          </div>
          <div className="w-full sm:w-[50%] text-amber-50">
            Fatec Zona Sul - Av. Eng. Armando de Arruda Pereira, 5241 - Vila do
            Encontro, São Paulo - SP, 04309-011
          </div>
          <div className="w-full sm:w-[50%] h-[300px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.369499339536!2d-46.73169322466674!3d-23.662740678730316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce519898114bc9%3A0xf63965c7d0dd6770!2sFaculdade%20de%20Tecnologia%20do%20Estado%20de%20S%C3%A3o%20Paulo%20Zona%20Sul%20-%20Dom%20Paulo%20Evaristo%20Arns!5e0!3m2!1spt-BR!2sbr!4v1753532946855!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa da Fatec Zona Sul"
            ></iframe>
          </div>
        </div>

        {/* Seção de Footer */}
        <div className="w-full flex-col bg-[#cc1338] ">
          <div className="flex flex-col w-full h-[100px] rounded-lg overflow-hidden shadow-lg justify-center text-amber-50 gap-3">
            <div className="flex justify-center items-center gap-4  ">
              <SlSocialInstagram size={22} />
              <FaFacebook size={22} />
              <FaYoutube size={22} />
            </div>
            <div>
              <h1 className="text-center">© 2025 Atlética Fatec Zona Sul</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
