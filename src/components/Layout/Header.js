import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand href='/'>Home</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='/study-javascript'>JavaScript</Nav.Link>
            <Nav.Link href='/study-python'>Python</Nav.Link>
            <Nav.Link href='/study-java'>Java</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
