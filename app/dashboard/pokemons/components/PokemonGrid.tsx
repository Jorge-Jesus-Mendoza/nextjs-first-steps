import { SimplePokemon } from "@/app/shopping-cart/components/interfaces/SimplePokemon";
import React from "react";
import PokemonCard from "./PokemonCard";

interface Props {
  pokemons: SimplePokemon[];
}

const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <>
      {pokemons.map((pokemon, id) => (
        <PokemonCard key={id} pokemon={pokemon} />
      ))}
    </>
  );
};

export default PokemonGrid;
