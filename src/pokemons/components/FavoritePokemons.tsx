'use client'

import { useAppSelector } from '@/store'
import { PokemonGrid } from './PokemonGrid'
import { IoHeartOutline } from 'react-icons/io5'

export const FavoritePokemons = () => {
  const favorite = useAppSelector((state) => Object.values(state.pokemons.favorites))
  // const [pokemons, setPokemons] = useState(favorite)

  // useEffect(() => {
  //   setPokemons(favorite)
  // }, [favorite])

  return <>{favorite.length > 0 ? <PokemonGrid pokemons={favorite} /> : <NoFavorites />}</>
}

export const NoFavorites = () => {
  return (
    <div className='flex flex-col h-[50vh] items-center justify-center'>
      <IoHeartOutline className='text-red-500' size={100} />
      <span>No hay favoritos</span>
    </div>
  )
}
