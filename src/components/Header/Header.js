import React from 'react';
import logo from './Logo.png';
import './Header.css';

function Header () {
    return(
        <header className="header">
            <img src={logo} alt="logo" />
        </header>
    );
}

export default Header;