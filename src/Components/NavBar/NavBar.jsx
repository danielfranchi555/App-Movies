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
import './NavBar.scss'
const NavBar = () => {

 const {isAuthenticated,user} = useAuth0()
 
  return (
<nav class="navbar navbar-expand-lg  navbar-light ">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse  " id="navbarSupportedContent">
      <ul class="navbar-nav m-auto">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">Terror</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
      </ul>
          {!isAuthenticated ?<LoginButton/>:<LogoutButton/>}

    </div>
  </div>
</nav>
  )
}

export default NavBar