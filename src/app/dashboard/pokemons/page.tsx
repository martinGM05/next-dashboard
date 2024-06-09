import { PokemonGrid, PokemonsReponse, SimplePokemon } from '@/pokemons'

const getPokemons = async (limit = 151, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsReponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then(
    (response) => response.json()
  )

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split('/')[6],
    name: pokemon.name
  }))

  return pokemons
}

export default async function PokemonsPage() {
  const pokemons = await getPokemons()

  return (
    <div className='flex flex-col'>
      <span className='text-5xl my-2'>
        Listado de Pokémons <small>estático</small>
      </span>
      <div className='flex flex-wrap gap-10 items-center justify-center'>
        <PokemonGrid pokemons={pokemons} />
      </div>
    </div>
  )
}
