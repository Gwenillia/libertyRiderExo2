import React, { Component } from 'react';
import './header.css';
import logo from '../assets/logo.png';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="branding">
                    <img src={logo} alt="logo liberty rider"/>
                </div>
            </header>
        );
    }
}

export default Header;