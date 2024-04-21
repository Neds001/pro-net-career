import React from 'react';
import '../Header/Header.css';
import Logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <header>
                <Link to='/' className='pageHeader'>
                    <div className="leftContent">
                        <img src={Logo} alt="Logo" className="logo" />
                        <h1 className='headerText'>Get Started on ProNetCareer</h1>
                    </div>
                </Link>
                <div className="buttonContainer">
                    <Link to="/login" className="btn loginBtn">Login</Link>
                </div>
            </header>
        </>
    )
}

export default Header;