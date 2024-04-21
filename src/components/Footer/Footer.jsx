import React from 'react';
import '../../components/Footer/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <footer>
                <div className='footerContainer'>
                    <Link to='#' className='about'>About ProNetCareer</Link>
                    <Link to='/policy' className='policy'>Privacy Policy</Link>
                </div>
            </footer>
        </>
    )
}

export default Footer;