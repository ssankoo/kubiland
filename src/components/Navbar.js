import React from 'react';
import './css/Navbar.css';
import Logo from './assets/Logo.png'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={Logo} alt="Logo" />
            </div>
            <ul className="nav-links">
                <li><a href="#nosotros">nosotros</a></li>
                <li><a href="#mission">misión</a></li>
                <li><a href="#contact">contacto</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
