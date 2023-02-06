import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const NavBar = () => {
  return (
    <Navbar bg="ligth" className='fixed-top' expand="lg" >
    <Container>
      <Navbar.Brand href="#home" style={{color:'white'}}>React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <Nav.Link href="#home" style={{color:'white'}}>Home</Nav.Link>
          <Nav.Link href="#link" style={{color:'white'}}>Link</Nav.Link>
        </Nav>
        <div>
          <button className='btn btn-danger'>log in</button>
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar