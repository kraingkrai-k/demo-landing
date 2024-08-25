import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Pokemon = {};

export const pokemonApi = createApi({
  // Set the baseUrl for every endpoint below
  reducerPath: "pokemonApi",
  tagTypes: ["Pokemon"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
    updatePokemon: builder.mutation({
      query: ({ name, patch }) => ({
        url: `pokemon/${name}`,
        // When performing a mutation, you typically use a method of
        // PATCH/PUT/POST/DELETE for REST endpoints
        method: "PATCH",
        // fetchBaseQuery automatically adds `content-type: application/json` to
        // the Headers and calls `JSON.stringify(patch)`
        body: patch,
      }),
    }),
  }),
});

export const { useGetPokemonByNameQuery, useUpdatePokemonMutation } =
  pokemonApi;
