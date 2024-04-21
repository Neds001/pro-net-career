import React, { useState } from 'react';
import './DashboardHeader.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { animateScroll as scroll } from 'react-scroll'; // Import react-scroll

function DashboardHeader() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleNavClick = () => {
        setIsNavOpen(!isNavOpen);
    }

    // Function to scroll ContentSection to the top
    const scrollToTop = () => {
        scroll.scrollToTop({
            duration: 500,
            smooth: "easeInOutQuart"
        });
    };

    return (
        <div className='headerContainer'>
            <div className="leftContainer" >
                <Link to="/dashboard" onClick={scrollToTop} >
                    <img src={Logo} alt="" className='leftContainerLogo' />
                </Link>
                <div className="inputContainer">
                    <SearchIcon />
                    <input type="text" placeholder="Search for anything..." />
                </div>
            </div>
            <div className="middleContainer">
                <Link to="/dashboard" className='homeColor'>
                    <HomeIcon fontSize='large' className='home' onClick={scrollToTop} />
                </Link>
                <Link className='linkNetwork' to='/findNetworks' >
                    <PeopleAltIcon fontSize='large' />
                </Link>
                {/* to='/findJobs' */}
                <Link className='linkNetwork' >
                <BusinessCenterIcon fontSize='large' className='linkJobs' />
                </Link>
            </div>
            <div id="rightContainer" className={isNavOpen ? '' : 'active'}>
                <EmailIcon fontSize='large' className='linkMessage' />
                <p>Email</p>
                <NotificationsActiveIcon fontSize='large' className='linkNotif' />
                <p>Notifications</p>
                <Link to='/profile' className='linkProfile'>
                    <PersonIcon fontSize='large' />
                </Link>
                <p>Profile</p>
                <Link to='/'><button>Log out</button></Link>
            </div>
            <div className="navbar" onClick={handleNavClick}>
                {isNavOpen ? <CloseIcon fontSize='large' /> : <MenuIcon fontSize='large' />}
            </div>
        </div>
    );
}

export default DashboardHeader;
