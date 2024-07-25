import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { SimplePokemon } from '@/pokemons'

interface PokemonsState {
  favorites: { [key: string]: SimplePokemon }
}

// const getInitialState = (): PokemonsState => {
//   // if (typeof localStorage === 'undefined') return {}
//   const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}')
//   return favorites
// }

const initialState: PokemonsState = {
  favorites: {}
  // ...getInitialState()
  // '1': { id: '1', name: 'bulbasor' },
  // '3': { id: '3', name: 'venusaur' },
  // '5': { id: '5', name: 'charmaleon' }
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavoritesPokemons(state, action: PayloadAction<{ [key: string]: SimplePokemon }>) {
      state.favorites = action.payload
    },
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const { id } = action.payload
      if (!!state.favorites[id]) {
        delete state.favorites[id]
        // return
      } else {
        state.favorites[id] = action.payload
      }

      localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites))
    }
  }
})

export const { toggleFavorite, setFavoritesPokemons } = pokemonsSlice.actions

export default pokemonsSlice.reducer
