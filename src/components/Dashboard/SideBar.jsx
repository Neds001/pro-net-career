import React from 'react';
import './SideBar.css';
import Person from '../../assets/images/img.jpg';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import EventIcon from '@mui/icons-material/Event';
import { Link } from "react-router-dom";

function SideBar() {

    const fullName = localStorage.getItem('fullName');

    return (
        <div className='sidebarContainer'>
            <div className="upperContainer">
                <Link to='/profile' className='save'>
                    <div className="profile">
                        <img src={Person} alt="personimg" className='person' />
                        <h4 className='profileName'>{fullName}</h4>
                    </div>
                </Link>
                <Link to='/networks' className='save'>
                    <div className="networks">
                        <PeopleAltIcon fontSize='large' color='success' className='people' />
                        <h5>My Networks</h5>
                    </div>
                </Link>
                <Link to='/groups' className='save'>
                    <div className="groups">
                        <GroupsIcon fontSize='large' color='success' className='group' />
                        <h5>My Groups</h5>
                    </div>
                </Link>
                <Link to='/maintenance' className='save'>
                    <div className="saved">
                        <BookmarkIcon fontSize='large' color='success' className='saveds' />
                        <h5>Saved</h5>
                    </div>
                </Link>
                <Link to='/maintenance' className='save'>
                    <div className="event">
                        <EventIcon fontSize='large' color='success' />
                        <h5 className='events'>Event</h5>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default SideBar;