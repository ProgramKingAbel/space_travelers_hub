import Container from 'react-bootstrap/Container';
import React from 'react';
import '../styles/Navbar.css';
import Navbars from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../image/space-logo.png';

const links = [
  { path: '/', text: 'Rockets', eventKey: 'link1' },
  { path: 'Dragons', text: 'Dragons', eventKey: 'link2' },
  { path: 'Missions', text: 'Missions', eventKey: 'link3' },
  { path: 'Profile', text: 'My Profile', eventKey: 'link4' },
];

const Navbar = () => (
  <Navbars expand="lg" sticky="top" className="bg-dark text-white pt-3 pb-2">
    <Container>
      <Navbars.Brand href="#" className="text-light title d-flex">
        <img src={logo} alt="space-logo-img" style={{ width: '50px', height: '50px' }} />
        <h3>Space X  HUB</h3>
      </Navbars.Brand>
      <Nav>
        {links.map((link) => (
          <Nav.Item key={link.text}>
            <Nav.Link href={link.path} className="text-primary hover-bg mx-3 ">{ link.text }</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </Container>
  </Navbars>
);

export default Navbar;
