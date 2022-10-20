import { createSlice } from '@reduxjs/toolkit'
import axios from '../../utils/axios'
const listPokemonSlice = createSlice({
  name: 'listPokemon',
  initialState: { pokemons: [], count: 0, next: '', previous: '', loading: false },
  reducers: {
    reDeclarePokemon: (state, action) => {
      console.log(action)
      const { results, count, next, previous } = action.payload
      state.pokemons = results
      state.count = count
      state.next = next
      state.previous = previous
    }
  }
})
export const initPokemon = () => async dispatch => {
  return await axios
    .get('/pokemon?limit=20&offset=0')
    .then(({ data }) => {
      dispatch(listPokemonSlice.actions.reDeclarePokemon(data))
    })
    .catch(error => {
      console.log(error)
    })
}

export const { reDeclarePokemon } = listPokemonSlice.actions
export default listPokemonSlice.reducer
