import { SimplePokemon } from "@/app/shopping-cart/components/interfaces/SimplePokemon";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoHeart } from "react-icons/io5";

interface Props {
  pokemon: SimplePokemon;
}

const PokemonCard = ({ pokemon }: Props) => {
  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="text-center p-6 bg-gray-800 border-b flex flex-col items-center">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon?.id}.png`}
            priority={false}
            width={100}
            height={100}
            alt="pkm"
          />
          <p className="pt-2 text-lg font-semibold text-gray-50">
            {pokemon?.name}
          </p>
        </div>
        <div className="border-b">
          <Link
            href={`/dashboard/pokemons/${pokemon?.name}`}
            className="px-4 py-2 hover:bg-gray-100 flex"
          >
            <div className="text-green-600 flex flex-col items-center justify-center">
              <IoHeart />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                No es Favorito
              </p>
              <p className="text-xs text-gray-500">View your campaigns</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
