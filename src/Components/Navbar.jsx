import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
    { path: '/', text: 'Rockets' },
    { path: 'Dragons', text: 'Dragons' },
    { path: 'Missions', text: 'Missions' },
    { path: 'Profile', text: 'My Profile' },
];

const Navbar = () => (
    <nav>
        <h1>Logo here</h1>
        <ul>
            {links.map((link) => (
                <li key={link.text}>
                    <NavLink to={link.path}>{ link.text }</NavLink>

                </li>
            )
            
            )}
        </ul>
    </nav>
);


export default Navbar