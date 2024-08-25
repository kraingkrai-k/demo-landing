"use client";

import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { pokemonApi } from "@app/services/pokemon";
import Introduce from "./_components/Introduce";
import SuggestProduct from "./_components/SuggestProduct";
import TestimonialContent from "./_components/TestimonialContent";

export default function Demo() {
  return (
    <ApiProvider api={pokemonApi}>
      <div>
        <Introduce />

        <SuggestProduct />

        <TestimonialContent />
      </div>
    </ApiProvider>
  );
}
