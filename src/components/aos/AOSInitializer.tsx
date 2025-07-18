// components/AOSInitializer.tsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function AOSInitializer() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return null; // esse componente só inicializa o AOS, não renderiza nada
}
