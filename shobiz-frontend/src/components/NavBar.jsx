import React from 'react';
import {NavLink} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
const NavBar = (props) => {
  return(
    <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <NavLink to="/">Home</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/profile">Profile</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/movies">Movies</NavLink> 
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/register">Register</NavLink>
      </Nav.Item>
      <Nav.Item>
        {props.user ? <NavLink to="/logout" onClick={props.clickHandler}>Logout</NavLink>:
          <NavLink to="/login">Login</NavLink>
        }   
      </Nav.Item>
    </Nav>
  )
};

export default NavBar;
