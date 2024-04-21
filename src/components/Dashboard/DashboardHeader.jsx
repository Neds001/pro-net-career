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
import { animateScroll as scroll } from 'react-scroll';

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
                <Link to="/dashboard" className='headerIcon'>
                    <HomeIcon fontSize='large' className='home' onClick={scrollToTop} />
                </Link>
                <Link className='headerIcon' to='/findNetworks' >
                    <PeopleAltIcon fontSize='large' />
                </Link>
                <Link className='headerIcon' to='/findJobs'>
                    <BusinessCenterIcon fontSize='large' className='linkJobs' />
                </Link>
            </div>
            <div id="rightContainer" className={isNavOpen ? '' : 'active'}>
                <Link to='/messages' className='headerIcon'>
                    <EmailIcon fontSize='large' className='linkMessage' />
                </Link>
                <p>Email</p>
                <Link to='/notifications' className='headerIcon'>
                    <NotificationsActiveIcon fontSize='large' className='linkNotif' />
                </Link>
                <p>Notifications</p>
                <Link to='/profile' className='linkProfile headerIcon'>
                    <PersonIcon fontSize='large' />
                </Link>
                <p>Profile</p>
                <Link to='/'>
                    <button class="logoutBtn">
                        <div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
                        <div class="text">Logout</div>
                    </button>
                </Link>
            </div>
            <div className="navbar" onClick={handleNavClick}>
                {isNavOpen ? <CloseIcon fontSize='large' /> : <MenuIcon fontSize='large' />}
            </div>
        </div>
    );
}

export default DashboardHeader;
