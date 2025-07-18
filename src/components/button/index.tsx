"use client";

import { useState } from "react";

export function CustomButton() {
  const [name, setName] = useState("");

  console.log(name);
  return (
    <>
      <div>
        <button onClick={() => setName("Alan")}>Alterar Alan</button>
        <button onClick={() => setName("Miguel")}>Alterar Miguel</button>
      </div>
      <h3>{name}</h3>
    </>
  );
}
