"use client";

import { A } from "@app/utils/todo.util";
import { useGetPokemonByNameQuery } from "@app/services/pokemon";

export default function Playground() {
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");

  console.log("X >> ", A);
  console.log("Log >> ", { data, error, isLoading });
  return (
    <main>
      <div>
        <p>
          Playground Component&nbsp;
          <code>app/page.tsx</code>
        </p>
      </div>
    </main>
  );
}
