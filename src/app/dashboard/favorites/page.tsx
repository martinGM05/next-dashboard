import { FavoritePokemons, PokemonGrid } from '@/pokemons'
import { IoHeartOutline } from 'react-icons/io5'

export const metadata = {
  title: 'Favorite Pokemons',
  description: '151 Pokemons'
}

export default async function PokemonsPage() {
  return (
    <div className='flex flex-col'>
      <span className='text-5xl my-2'>
        Pokémons favoritos <small className='text-blue-500'>Global state</small>
      </span>
      <div className='flex flex-wrap gap-10 items-center justify-center'>
        <FavoritePokemons />
      </div>
    </div>
  )
}
