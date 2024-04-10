import { PokemonResponseTs } from '@/app/shopping-cart/components/interfaces/PokemonResponse';
import { SimplePokemon } from '@/app/shopping-cart/components/interfaces/SimplePokemon';
import { NextPage } from 'next'
import Image from 'next/image'
import PokemonCard from './components/PokemonCard';
import PokemonGrid from './components/PokemonGrid';

interface Props { }

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonResponseTs = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(res => res.json());

  const pokemons = data.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }));

  // throw new Error('Esto es un error que no debería de suceder');
  // throw notFound();

  return pokemons;
}

const Page: NextPage<Props> = async ({ }) => {

  const pokemons = await getPokemons(151)
  return (
    <div className='flex flex-col'>
      <div className='flex flex-wrap gap-10 items-center justify-center w-full h-full'>
        <PokemonGrid pokemons={pokemons} />
      </div>
    </div>
  )
}

export default Page