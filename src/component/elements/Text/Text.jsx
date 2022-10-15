import PropTypes from 'prop-types'
import { TextStyled } from './styles'

const Text = ({ children, variant, size, className }) => {
  return (
    <TextStyled className={className} variant={variant} size={size}>
      {children}
    </TextStyled>
  )
}
Text.propTypes = {
  children: PropTypes.any,
  variant: PropTypes.any,
  size: PropTypes.any,
  className: PropTypes.any
}

export default Text
