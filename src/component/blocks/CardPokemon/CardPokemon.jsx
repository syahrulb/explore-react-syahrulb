import PropTypes from 'prop-types'
import { Wrapper, NumberStyled, Title } from './styles'
import { padDigits, formatTextToCapitalize } from '../../../utils/tools'
import Skeleton from '@material-ui/lab/Skeleton'
import TypesPokemon from '../TypesPokemon'

const CardPokemon = ({ data, loading }) => {
  const getPrimaryColor = values => {
    const getPrimaryNameType = values.find(v => v.slot === 1)?.type.name
    return getPrimaryNameType
  }
  return (
    <Wrapper key={data.id} color={getPrimaryColor(data.types)} loading={loading}>
      <div>
        {loading ? (
          <Skeleton animation='wave' variant='text' width={50} height={25} />
        ) : (
          <NumberStyled># {data.id && padDigits(data.id)}</NumberStyled>
        )}

        {loading ? (
          <Skeleton animation='wave' variant='text' width={125} height={43} />
        ) : (
          <Title as='h2'>{formatTextToCapitalize(data.name)}</Title>
        )}
        <TypesPokemon loading={loading} data={data.types} />
      </div>

      <div>
        {loading ? (
          <Skeleton animation='wave' variant='circle' width={96} height={96} />
        ) : (
          <>{data.img && <img src={data.img} alt={data.name} />}</>
        )}
      </div>
    </Wrapper>
  )
}

CardPokemon.propTypes = {
  data: PropTypes.any,
  loading: PropTypes.bool
}
export default CardPokemon
