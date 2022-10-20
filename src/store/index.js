import { configureStore } from '@reduxjs/toolkit'
import listPokemonSlice from './pokemon/listPokemon'

export const store = configureStore({
  reducer: {
    listPokemon: listPokemonSlice
  }
})
