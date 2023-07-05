import Container from 'react-bootstrap/Container';
import React from 'react';
import '../styles/Navbar.css';
import Navbars from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const links = [
  { path: '/', text: 'Rockets' },
  { path: 'Dragons', text: 'Dragons' },
  { path: 'Missions', text: 'Missions' },
  { path: 'Profile', text: 'My Profile' },
];

const Navbar = () => (
  <Navbars expand="lg" sticky="top" className="bg-dark text-white pt-3 pb-2">
    <Container>
      <Navbars.Brand href="#" className="text-light title d-flex">
        <img src="#" alt="space-logo-img" />
        <h3>Space Traveler&apos;s HUB</h3>
      </Navbars.Brand>
      <Nav>
        {links.map((link) => (
          <Nav.Item key={link.text}>
            <Nav.Link href={link.path} className="text-light hover-bg mx-3">{ link.text }</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </Container>
  </Navbars>
);

export default Navbar;
