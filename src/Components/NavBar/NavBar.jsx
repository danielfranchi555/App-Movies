import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const NavBar = () => {
  return (
    <div className='mb-5'>
        <Navbar bg="dark" className='fixed-top ' variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="text-center">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <div>
            <button className='btn btn-danger' style={{color:'white'}}>
              Sign up
            </button>
          </div>
        </Container>
      </Navbar>    
    </div>
  )
}

export default NavBar