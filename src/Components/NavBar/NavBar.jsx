import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginButton from '../LoginButton/LoginButton';
import LogoutButton from '../LogoutButton/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import Profile from '../Profile/Profile';
import logo from '../../img/video.png'
import { Link } from 'react-router-dom';
const NavBar = () => {

 const {isAuthenticated,user} = useAuth0()
 
  return (
    <Navbar bg="primary" className='fixed-top' expand="lg"  /* style={{marginBottom:'200px'}} */>
    <Container>
    <Link to={'/'}>  <Navbar.Brand href="#home" style={{color:'white'}}> <img src={logo} alt="" style={{width:'40px'}}/> </Navbar.Brand> </Link> 
      <Navbar.Toggle style={{color:'white',backgroundColor:'white'}} aria-controls="basic-navbar-nav" />
      <Navbar.Collapse style={{marginTop:'19px'}} id="basic-navbar-nav">
        <Nav className="m-auto">
          <p href="#" style={{color:'white',fontWeight:'800'}}>{isAuthenticated && user.name}</p>
         
        </Nav>
        {isAuthenticated ?
         <Profile/>:
         <LoginButton/>
      }
      {isAuthenticated &&
      <LogoutButton/>
      }
      
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar