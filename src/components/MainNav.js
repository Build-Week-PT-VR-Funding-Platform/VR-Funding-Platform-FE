import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const MainNav = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md">
      <NavLink to={`/`} className="navbar-brand">Dreality</NavLink>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to={`/`} className="nav-link">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={`/projects`} className="nav-link">Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={`/login`} className="nav-link"><Button color="secondary">Log In</Button></NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={`/signup`} className="nav-link"><Button color="primary">Sign Up</Button></NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default MainNav;
