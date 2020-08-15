import React from 'react';
import {NavLink} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
const NavBar = () => {
  return(
    // <ul className="nav">
    //   <li>
    //     <NavLink to="/">Home</NavLink>
    //   </li>
    //   <li>
    //     <NavLink to="/login">Login</NavLink>
    //   </li>
    //   <li>
    //     <NavLink to="/register">Register</NavLink>
    //   </li>
    //   <li>
    //     <NavLink to="/profile">Profile</NavLink>
    //   </li>
    //   <li>
    //       <NavLink to="/movies">Movies</NavLink> 
    //   </li>
    // </ul>
    <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <NavLink to="/">Home</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/login">Login</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/register">Register</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/profile">Profile</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/movies">Movies</NavLink> 
      </Nav.Item>
    </Nav>
  )
};

export default NavBar;
