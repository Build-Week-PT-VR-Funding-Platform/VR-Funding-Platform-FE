import React, { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, Button } from 'reactstrap';
import { NavLink, Redirect } from 'react-router-dom';

const MainNav = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [ user, setUser ] = useContext(UserContext);

  const toggle = () => setIsOpen(!isOpen);

  const logOut = () => {
    localStorage.removeItem('token');
    setUser({
      id: null,
      name: '',
      username: ''
    });
  };

  if(!user.id) { 
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
  } else {
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
            <NavLink to={`/entrepreneurs`} className="nav-link">Entrepreneurs</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={`/dashboard`} className="nav-link">Dashboard</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={`/account`} className="nav-link">Account Settings</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={`/`} className="nav-link">
              <Button color="secondary" type="button" onClick={logOut}>Log Out</Button>
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
    )}
}

export default MainNav;
