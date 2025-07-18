"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay"; // <-- ESTE É O AUTOPLAY

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  const colabs = [
    {
      name: "Guilherme",
      function: "Presidente",
      image: "/gestao/perfil_guilherme.png",
    },
    {
      name: "Ana",
      function: "Eventos/Marketing",
      image: "/gestao/perfil_ana.png",
    },
    {
      name: "Gabriel",
      function: "Parcerias",
      image: "/gestao/perfil_gabriel.png",
    },
  ];

  return (
    // <Carousel
    //   plugins={[plugin.current]}
    //   className=" sm:ml-[100px] w-[400px] h-full" // OK
    //   onMouseEnter={plugin.current.stop}
    //   onMouseLeave={plugin.current.reset}
    // >
    //   <CarouselContent className="h-full">
    //     {images.map((image, index) => (
    //       <CarouselItem key={index} className="h-full">
    //         <div className="w-full h-full flex justify-center items-center">
    //           <img className="h-full w-auto object-cover" src={image.image} />
    //         </div>
    //       </CarouselItem>
    //     ))}
    //   </CarouselContent>
    //   {/* <CarouselPrevious />
    //   <CarouselNext /> */}
    // </Carousel>

    <Carousel
      plugins={[plugin.current]}
      className="h-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="h-full">
        {colabs.map((colab, index) => (
          <CarouselItem key={index}>
            <div className="flex items-center justify-center p-4 ">
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-white">
                  {colab.name}
                </span>
                <span className="text-sm text-white max-w-[100px]  whitespace-break-spaces">
                  {colab.function}
                </span>
              </div>
              <div className="w-40 h-40 sm:w-60 sm:h-60 rounded-full ml-10 overflow-hidden border border-gray-300">
                <img
                  src={colab.image}
                  alt={colab.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
