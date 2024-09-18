import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://pokeapi.co/api/v2',
});

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery,
  tagTypes: ['Pokemon'],
  endpoints: (builder) => ({
    getPokemon: builder.query<any, void>({
      query: () => `/pokemon/35`,
      providesTags: ['Pokemon'],
    }),
  }),
});

export const { useGetPokemonQuery } = pokemonApi;
