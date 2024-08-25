"use client";

import Introduce from "./_components/Introduce";
import SuggestProduct from "./_components/SuggestProduct";
import TestimonialContent from "./_components/TestimonialContent";

// import { ApiProvider } from "@reduxjs/toolkit/query/react";
// import { pokemonApi } from "@app/services/pokemon";
{
  /* <ApiProvider api={pokemonApi}> */
}
// </ApiProvider>

export default function Demo() {
  return (
    <div>
      <Introduce />

      <SuggestProduct />

      <TestimonialContent />
    </div>
  );
}
