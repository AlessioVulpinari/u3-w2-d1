import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

const MyNav = (props) => (
  <Navbar fixed='top' expand='lg' bg='dark' data-bs-theme='dark'>
    <Container>
      <Navbar.Brand href='#home'> EpiBooks </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='me-auto'>
          <Nav.Link href='#'>Home</Nav.Link>
          <Nav.Link href='#'>Link</Nav.Link>
          <Nav.Link href='#'>Browse</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default MyNav
