import { createSlice } from '@reduxjs/toolkit'
import axios from '../../utils/axios'
const listPokemonSlice = createSlice({
  name: 'listPokemon',
  initialState: { pokemons: [], count: 0, next: '', previous: 'previous', loading: false },
  reducers: {
    initPokemon(state) {
      state.loading = true
      axios
        .get('/pokemon?limit=20&offset=0')
        .then(({ data }) => {
          const { count, next, previous, results } = data
          console.log(results)
          state.count = count
          state.next = next
          state.previous = previous
          state.pokemons = results
          state.loading = false
          console.log(state.pokemons)
        })
        .catch(err => {
          // state.loading = false
          return err
        })
    }
  }
})

export const { initPokemon } = listPokemonSlice.actions
export default listPokemonSlice.reducer
