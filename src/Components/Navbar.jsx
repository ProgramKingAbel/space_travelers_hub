import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../image/planet.png';
import style from '../styles/Navbar.module.css';

const links = [
  { path: '/', text: 'Rockets' },
  { path: 'Dragons', text: 'Dragons' },
  { path: 'Missions', text: 'Missions' },
  { path: 'Profile', text: 'My Profile' },
];

const Navbar = () => (
  <nav className={style.nav}>
    <div className={style.logoDiv}>
      <img src={logo} alt="space-travelers-hub" className={style.logo} />
      <h1>Space Travelers&apos; Hub</h1>
    </div>
    <ul className={style.links}>
      {links.map((link) => (
        <li key={link.text}>
          <NavLink to={link.path} className={style.link}>{ link.text }</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
