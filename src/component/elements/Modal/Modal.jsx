import PropTypes from 'prop-types'
import { Container, ModalStyled } from './styles'

const Modal = ({ open, children, handleClose }) => {
  return (
    <ModalStyled open={open} onClose={handleClose}>
      <Container>{children}</Container>
    </ModalStyled>
  )
}

Modal.propTypes = {
  open: PropTypes.any,
  children: PropTypes.any,
  handleClose: PropTypes.any
}
export default Modal
