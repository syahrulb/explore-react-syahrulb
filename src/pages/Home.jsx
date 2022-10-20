import { useEffect } from 'react'
import { Box as BoxStyled } from './styles'
import CardPokemon from '../component/blocks/CardPokemon'
import { useSelector, useDispatch } from 'react-redux'
import { initPokemon } from '../store/pokemon/listPokemon'

const Home = () => {
  const pokemons = useSelector(state => state.listPokemon.pokemons)
  const loading = useSelector(state => state.listPokemon.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initPokemon())
  }, [])
  return (
    <BoxStyled>
      {pokemons.length != 0 &&
        pokemons.map(pokemon => {
          return <CardPokemon key={pokemon.id} data={pokemon} loading={loading} />
        })}
    </BoxStyled>
  )
}

export default Home
