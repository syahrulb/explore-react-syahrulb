import { configureStore } from '@reduxjs/toolkit'
import listPokemon from './pokemon/listPokemon'

export const store = configureStore({
  reducer: {
    listPokemon: listPokemon
  }
})
