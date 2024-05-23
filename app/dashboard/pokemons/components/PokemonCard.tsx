"use client";

import { SimplePokemon } from "@/app/shopping-cart/components/interfaces/SimplePokemon";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { toggleFavorites } from "@/app/store/pokemons/pokemons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoHeadsetOutline, IoHeart, IoHeartOutline } from "react-icons/io5";

interface Props {
  pokemon: SimplePokemon;
}

const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;
  const pokemons = useAppSelector((store) => !!store.pokemons[id]);
  const dispatch = useAppDispatch();

  const handleFavorite = () => {
    dispatch(toggleFavorites(pokemon));
  };

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="text-center p-6 bg-gray-800 border-b flex flex-col items-center">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            priority={false}
            width={100}
            height={100}
            alt="pkm"
          />
          <p className="pt-2 text-lg font-semibold text-gray-50">{name}</p>
          <div className="mt-5">
            <Link
              href={`/dashboard/pokemons/${name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              Más información
            </Link>
          </div>
        </div>
        <div className="border-b">
          <div
            className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer"
            onClick={handleFavorite}
          >
            <div className="text-green-600 flex flex-col items-center justify-center">
              {pokemons ? <IoHeart /> : <IoHeartOutline />}
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                {pokemons ? "Es Favorito" : "No es Favorito"}
              </p>
              <p className="text-xs text-gray-500">Click para cambiar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
