import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #0077cc;
  padding: 1rem;
  text-align: center;
`;

const NavLink = styled(Link)`
  color: white;
  margin: 0 1rem;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <Nav>
      <NavLink to="/">Flights</NavLink>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </Nav>
  );
};

export default Header;
