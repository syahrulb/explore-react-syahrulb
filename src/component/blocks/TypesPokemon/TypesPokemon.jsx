import PropTypes from 'prop-types'
import Skeleton from '@material-ui/lab/Skeleton'
import { Label, Box } from './styles'

const TypesPokemon = ({ data, loading }) => {
  return (
    <Box>
      {data.map(item => {
        return loading ? (
          <Skeleton key={item.type.name} animation='wave' variant='rect' width={50} height={25} />
        ) : (
          <Label key={item.type.name} color={item.type.name}>
            {item.type.name}
          </Label>
        )
      })}
    </Box>
  )
}

TypesPokemon.propTypes = {
  data: PropTypes.any,
  loading: PropTypes.any
}
export default TypesPokemon
