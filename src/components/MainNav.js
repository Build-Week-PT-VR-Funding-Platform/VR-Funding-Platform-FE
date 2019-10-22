import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const MainNav = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md">
        <Link to={`/`} className="navbar-brand">Dreality</Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to={`/`} className="nav-link">Home</Link>
            </NavItem>
            <NavItem>
              <Link to={`/projects`} className="nav-link">Projects</Link>
            </NavItem>
            <NavItem>
              <Link to={`/login`} className="nav-link"><Button color="secondary">Log In</Button></Link>
            </NavItem>
            <NavItem>
              <Link to={`/signup`} className="nav-link"><Button color="primary">Sign Up</Button></Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  )
}

export default MainNav;
