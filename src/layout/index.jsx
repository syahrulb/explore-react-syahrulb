import PropTypes from 'prop-types'
import Header from '../component/Header'
import Container from '@mui/material/Container'

const Index = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  )
}

Index.propTypes = {
  children: PropTypes.any
}
export default Index
