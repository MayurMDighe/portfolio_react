import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <> 
    <Navbar bg="light" expand="lg">
    <Container>
      <NavLink className="navbar-brand" to={'/'}>Portfolio</NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse class="justify-content-end" id="basic-navbar-nav">
        <Nav className="">
          <NavLink className='nav-link' to={'/'}>Home</NavLink>
          <NavLink className='nav-link' to={'/about'}>About</NavLink> 
          <NavLink className='nav-link' to={'/contact'}>Contact</NavLink> 
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
    </Container>
   </Navbar>
  </>
  )
}

export default Menu;